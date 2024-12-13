import { useEffect, useState } from "react";
import { ProjectService } from "../classes/projectservice";
import { siteConfig } from "../config/site";
import { DefaultLayout } from "../layouts/Default";
import { Project } from "../classes/project";
import { Container, Title } from "@mantine/core";

export default function Eng() {
    const [data, setData] = useState<Project[]>();
    let page = siteConfig.ENG_CATEGORY;

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
                <Container fluid size="xl">
                    <Title className="title">Engineering & Embedded Programming</Title>

                </Container>
            </DefaultLayout>
        </>
    );
}