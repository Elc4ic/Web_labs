import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import MuiGrid  from '@mui/material/Grid';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import StationCard from './components/StationCard';
import { stations } from './data';

const Grid = MuiGrid as any;

const App = () => {
    const [page, setPage] = useState("1");

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#fdfdfd' }}>
            <Navbar active={page} onPageChange={setPage} />

            <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
                <Container maxWidth="xl">
                    {page === "1" && (
                        <>
                            <Box sx={{ mb: 6 }}>
                                <Gallery />
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                justifyContent: 'space-between',
                                mb: 5,
                                gap: 4
                            }}>
                                <Box sx={{ width: { xs: '100%', md: '25%' } }}>
                                    <StationCard station={stations[0]} />
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: '70%' } }}>
                                    <StationCard station={stations[1]} />
                                </Box>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                justifyContent: 'space-between',
                                mb: 5,
                                gap: 3
                            }}>
                                <Box sx={{ width: { xs: '100%', md: '31%' } }}>
                                    <StationCard station={stations[2]} />
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: '31%' } }}>
                                    <StationCard station={stations[3]} />
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: '31%' } }}>
                                    <StationCard station={stations[4]} />
                                </Box>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                justifyContent: 'space-between',
                                mb: 5,
                                gap: 4
                            }}>
                                <Box sx={{ width: { xs: '100%', md: '70%' } }}>
                                    <StationCard station={stations[5]} />
                                </Box>
                                <Box sx={{ width: { xs: '100%', md: '25%' } }}>
                                    <StationCard station={stations[6]} />
                                </Box>
                            </Box>
                        </>
                    )}

                    {page === "2" && (
                        <>
                            <Typography variant="h4" sx={{ mb: 4, color: '#00a1ff', fontWeight: 'bold' }}>
                                Галерея электростанций
                            </Typography>
                            <Gallery />
                        </>
                    )}

                    {page === "3" && (
                        <Typography variant="h5" align="center" sx={{ mt: 10 }}>
                            Контактная информация: ФИО Студента, Группа
                        </Typography>
                    )}
                </Container>
            </Box>

            {/* Футер */}
            <Box component="footer" sx={{ py: 3, textAlign: 'center', borderTop: '1px solid #e0e0e0', bgcolor: 'white' }}>
                <Typography variant="body2" color="textSecondary">
                    Лабораторная работа 6. Электростанции мира © 2024
                </Typography>
            </Box>
        </Box>
    );
};

export default App;