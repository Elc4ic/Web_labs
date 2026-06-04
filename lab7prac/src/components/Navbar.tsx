import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const pages = [
    { title: 'Главная', path: '/' },
    { title: 'Таблица станций', path: '/list' },
    { title: 'Аналитика', path: '/chart' }
];

function Navbar() {
    const location = useLocation();

    return (
        <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 1, borderBottom: '2px solid #e0e0e0' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" sx={{ color: '#00a1ff', flexGrow: 1, fontWeight: 'bold', textDecoration: 'none' }} component={Link} to="/">
                        Электростанции мира
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {pages.map((page) => {
                            const isActive = location.pathname === page.path;
                            return (
                                <Button
                                    key={page.title}
                                    component={Link}
                                    to={page.path}
                                    sx={{
                                        borderRadius: '20px', textTransform: 'none', px: 3,
                                        bgcolor: isActive ? '#00a1ff' : 'transparent',
                                        color: isActive ? 'white' : '#00a1ff',
                                        '&:hover': { bgcolor: isActive ? '#0081cc' : '#e6f5ff' }
                                    }}
                                >
                                    {page.title}
                                </Button>
                            );
                        })}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;