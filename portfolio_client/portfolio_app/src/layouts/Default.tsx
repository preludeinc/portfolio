import { AppShell, Container } from "@mantine/core";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const DefaultLayout = ({children, page} :
                             { children: any, 
                                page: number}) => {
    return (
        <>
            <AppShell
                header={{ height: { base: 50, sm: 60, lg: 76 } }}
                >
                <Navbar page={page}/>
                <AppShell.Main>
                    {children}
                </AppShell.Main>
            </AppShell>
            <Footer />
        </>
    )
}