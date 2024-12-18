import { useEffect, useState } from "react";
import { Project } from "../classes/project";
import { ProjectService } from "../classes/projectservice"
import { siteConfig } from "../config/site";
import { DefaultLayout } from "../layouts/Default";
import { Container, Grid, Image, Text, Title } from "@mantine/core";

export default function Web() {

    const [data, setData] = useState<Project[]>();
    let page = siteConfig.WEB_CATEGORY;

    useEffect(() => {
        const fetchProjectData = async () => {
            const projectCall = new ProjectService(siteConfig.PORT);
            const response = await projectCall.getProjects(page);
            setData(response);
        };
        fetchProjectData();
    }, []);

    return (
        <>
        <DefaultLayout page={page}>
                <Title className="title" mb={60}>Websites</Title>
                {data ? 
                    data.map((_item) => 
                    <Container className="web-container" size="md" key={_item.id} m={20}>
                        <Title order={2} mt={20} ta={{base: "center", md: "left"}} c="white">{_item.title}</Title>
                        <Text c="white" ta="left" mt={20} mb={20} size="xl">{_item.description}</Text>
                        {_item.id == 1 ? (
                            <Grid>
                                <Grid.Col span={12}>
                                    <Image
                                        src={'/home_page.jpg'}
                                        radius="md"
                                        fit="contain" />
                                 </Grid.Col>
                                <Grid.Col span={12}>
                                    <Image src={'/teams_page.jpg'} mb={10} />
                                </Grid.Col>
                            </Grid>): null}
                    </Container>
                ): null}
        </DefaultLayout>
        </>
    );
}