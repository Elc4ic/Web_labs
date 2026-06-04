import Navbar from "../components/Navbar";
import Gallery from "./components/Gallery";
import {Link, useLocation} from "react-router-dom";
import React from "react";
import Footer from "../components/Footer";
import structures from "../data";
import ContentFilter from "./components/Filter";
import BuildCard from "./components/BuildCard";
import {Container} from "@mui/material";

function Main() {
    const location = useLocation();

    const getActivePage = () => {
        if (location.pathname === '/') return '1';
        if (location.pathname === '/list') return '2';
        if (location.pathname === '/charts') return '3';
        return '0';
    };

    return (
        <div>
            <Navbar active={getActivePage()}/>
            <Container maxWidth="xl">
                <Gallery/>
                <ContentFilter data={structures}>
                    {(filteredData) => (
                        <>
                            {filteredData.map((item, idx) => (
                                <BuildCard key={item.title} building={item} index={idx}/>
                            ))}
                        </>
                    )}
                </ContentFilter>
            </Container>

            <Footer/>
        </div>
    );
}

export default Main;