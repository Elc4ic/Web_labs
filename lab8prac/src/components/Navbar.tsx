import React, {useState} from 'react';
import {
    AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer,
    MenuItem,
    styled,
    MenuList
} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const pages = [
    {title: 'Главная', path: '/'},
    {title: 'Таблица станций', path: '/list'},
    {title: 'Аналитика', path: '/chart'},
    {title: 'Тест', path: '/quiz'}
];

function Navbar() {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    return (
        <AppBar position="static" sx={{bgcolor: 'white', boxShadow: 1, borderBottom: '2px solid #e0e0e0'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6"
                                sx={{color: '#00a1ff', flexGrow: 1, fontWeight: 'bold', textDecoration: 'none'}}
                                component={Link} to="/">
                        Электростанции мира
                    </Typography>

                    <Box sx={{display: {xs: 'none', md: 'flex'}, gap: 2}}>
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
                                        '&:hover': {bgcolor: isActive ? '#0081cc' : '#e6f5ff'}
                                    }}
                                >
                                    {page.title}
                                </Button>
                            );
                        })}
                    </Box>

                    <IconButton sx={{display: {xs: 'flex', md: 'none'}}} onClick={() => setOpen(true)}>
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </Container>

            <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseRoundedIcon />
                    </IconButton>
                </Box>
                <MenuList>
                    {pages.map((page) => {
                        const isActive = location.pathname === page.path;
                        return (
                            <MenuItem
                                key={page.path}
                                component={Link}
                                to={page.path}
                                selected={isActive}
                                onClick={() => setOpen(false)}
                                sx={{
                                    justifyContent: 'center',
                                    py: 2,
                                    color: isActive ? '#00a1ff' : 'inherit',
                                    fontWeight: isActive ? 'bold' : 'normal'
                                }}
                            >
                                {page.title}
                            </MenuItem>
                        );
                    })}
                </MenuList>
            </Drawer>
        </AppBar>
    );
}

export default Navbar;