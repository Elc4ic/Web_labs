import Gallery from "./components/Gallery";
import React from "react";
import structures from "../data";
import ContentFilter from "./components/Filter";
import BuildCard from "./components/BuildCard";
import {Container} from "@mui/material";

function Main() {
    return (
        <div>
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
        </div>
    );
}

export default Main;