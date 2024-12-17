import { useEffect, useState } from "react";
import { Project } from "../classes/project";
import { ProjectService } from "../classes/projectservice"
import { siteConfig } from "../config/site";
import { DefaultLayout } from "../layouts/Default";
import { Container, Text, Title } from "@mantine/core";

export default function Web() {

    const [data, setData] = useState<Project[]>();
    let page = siteConfig.WEB_CATEGORY;

    useEffect(() => {
        function fetchProjectData() {
            const projectCall = new ProjectService(siteConfig.PORT);
            const response = projectCall.getProjects(page);
            setData(response);
        };
        fetchProjectData();
    }, []);
    console.log(data);

    return (
        <>
        <DefaultLayout page={page}>
            <Container fluid size="xl">
                <Title className="title">Websites</Title>
                {data ? data.map((item, i) => (
                    <Title order={2}></Title>
                )): null}
                <Text c="cyan" ta="right"><i>This website has a Rails API and React front end<br/>
                with styling help provided by Mantine UI.</i></Text>
            </Container>
        </DefaultLayout>
        </>
    );
}