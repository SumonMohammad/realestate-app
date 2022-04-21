import Head from "next/head";
import { Box } from "@chakra-ui/react";
import { Fragment } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Head>
                <title> Real Estate Company</title>
            </Head>
            <Box maxWidth="1280" m="auto">
                <header>
                    <Navbar />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </Fragment>
    )
}
export default Layout;