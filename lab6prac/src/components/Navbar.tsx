import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

interface NavbarProps {
    active: string;
    onPageChange: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ active, onPageChange }) => {
    const menuItems = [
        { id: "1", label: "Главная" },
        { id: "2", label: "Станции Страны История" },
    ];

    return (
        <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 1, borderBottom: '2px solid #e0e0e0' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ minHeight: '64px' }}>
                    <Typography
                        variant="h6"
                        sx={{ color: '#00a1ff', flexGrow: 1, fontWeight: 'bold' }}
                    >
                        Электростанции мира - мощь человечества
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {menuItems.map((item) => (
                            <Button
                                key={item.id}
                                onClick={() => onPageChange(item.id)}
                                sx={{
                                    borderRadius: '20px',
                                    textTransform: 'none',
                                    px: 3,
                                    bgcolor: active === item.id ? '#00a1ff' : 'transparent',
                                    color: active === item.id ? 'white' : '#00a1ff',
                                    '&:hover': {
                                        bgcolor: active === item.id ? '#0081cc' : '#e6f5ff',
                                    }
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;