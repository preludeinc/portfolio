import { useEffect, useState } from "react";
import { Project } from "../classes/project";
import { ProjectService } from "../classes/projectservice"
import { siteConfig } from "../config/site";
import { DefaultLayout } from "../layouts/Default";
import { Container, Text, Title } from "@mantine/core";
import { config } from 'dotenv';

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

    config();

    return (
        <>
        <DefaultLayout page={page}>
            <Container fluid size="xl">
                <Title className="title" mb={60}>Websites</Title>
                {data ? 
                    data.map((_item) => 
                    <div key={_item.id}>
                        <Title order={1} m={20} ta="left" c="white">{_item.title}</Title>
                        {_item.id == 1 ? (<img src={import.meta.env.BASE_URL + '/home_page.jpg'} />): null}
                        <Text c="cyan" ta="left" m={20} size="xl">{_item.description}</Text>
                    </div>
                ): null}
            </Container>
        </DefaultLayout>
        </>
    );
}