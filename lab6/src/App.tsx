import './CSS/App.css';

import React, {useState} from 'react';
import {Container, Box, Typography} from '@mui/material';
import Navbar from './components/Navbar';
import ContentFilter from './components/Filter';
import Gallery from './components/Gallery';
import BuildCard from './components/BuildCard';
import {structures} from './data';

const App = () => {
    const [page, setPage] = useState("1");

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        }}>
            <Navbar active={page} onPageChange={setPage}/>

            <Box component="main" sx={{flexGrow: 1, py: 5}}>
                <Container maxWidth="xl">
                    {page === "1" && (
                        <>
                            <Typography variant="h3" align="center" sx={{mb: 5, fontWeight: 200}}>
                                Самые высокие здания и сооружения
                            </Typography>
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
                        </>
                    )}

                    {page === "2" && (
                        <Typography align="center" sx={{mt: 10}}>
                            Список
                        </Typography>
                    )}

                    {page === "3" && (
                        <Typography align="center" sx={{mt: 10}}>
                            Контактная информация: я
                        </Typography>
                    )}
                </Container>
            </Box>

            <Box component="footer" sx={{py: 3, textAlign: 'center', borderTop: '1px solid #e0e0e0', bgcolor: 'white'}}>
                <Typography variant="caption" color="textSecondary">
                    Лабораторная работа 6.
                </Typography>
            </Box>
        </Box>
    );
};

export default App;
