import React, { useState } from 'react';
import { Box, Container, Typography, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import StationFilter from './components/Filter';
import StationCard from './components/StationCard';
import { stations } from './data';

const theme = createTheme({
    palette: {
        primary: { main: '#005b96' },
        background: { default: '#f9f9f9' }
    },
    typography: { fontFamily: 'Roboto, Arial' }
});

const App = () => {
    const [page, setPage] = useState("1");

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar active={page} onPageChange={setPage} />

                <Box component="main" sx={{ flexGrow: 1, py: 6 }}>
                    <Container maxWidth="lg">
                        {page === "1" && (
                            <>
                                <Typography variant="h2" align="center" sx={{ mb: 6, fontWeight: 100 }}>
                                    Энергетические гиганты мира
                                </Typography>

                                <Gallery />

                                <StationFilter data={stations}>
                                    {(filtered) => (
                                        <Box sx={{ mt: 4 }}>
                                            <Typography variant="body2" sx={{ mb: 2 }}>
                                                Найдено объектов: {filtered.length}
                                            </Typography>
                                            {filtered.length > 0 ? (
                                                filtered.map((s, i) => (
                                                    <StationCard key={s.name} station={s} index={i} />
                                                ))
                                            ) : (
                                                <Typography color="error" align="center" sx={{ py: 10 }}>
                                                    К сожалению, по вашему запросу ничего не найдено.
                                                </Typography>
                                            )}
                                        </Box>
                                    )}
                                </StationFilter>
                            </>
                        )}

                        {page === "2" && <Typography variant="h4">Раздел "Список" </Typography>}
                    </Container>
                </Box>

                <Box component="footer" sx={{ py: 4, bgcolor: 'white', borderTop: '1px solid #ddd', textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        Практическая работа №6. Тема: Электростанции мира.
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default App;