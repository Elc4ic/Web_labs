import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

interface ComponentProps {
    active: string;
}

const pages = [
    { title: 'Главная', path: '/' },
    { title: 'Список зданий', path: '/list' },
    { title: 'Диаграммы', path: '/chart' }
];

function Navbar({ active }: ComponentProps) {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" color="default" elevation={1}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 700, color: 'inherit', textDecoration: 'none' }}
                    >
                        Самые высокие здания и сооружения
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem
                                    key={page.title}
                                    onClick={handleCloseNavMenu}
                                    component={Link}
                                    to={page.path}
                                    selected={active === String(index + 1)}
                                >
                                    <Typography variant="h6" align="center">{page.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h6"
                        noWrap
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, fontWeight: 700, color: 'inherit', textDecoration: 'none' }}
                    >
                        Здания и сооружения
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        {pages.map((page, index) => {
                            const isActive = active === String(index + 1);
                            return (
                                <Button
                                    key={page.title}
                                    component={Link}
                                    to={page.path}
                                    sx={{
                                        my: 2,
                                        mx: 1,
                                        display: 'block',
                                        backgroundColor: isActive ? 'primary.main' : 'transparent',
                                        color: isActive ? 'white' : 'text.primary',
                                        '&:hover': {
                                            backgroundColor: isActive ? 'primary.dark' : 'rgba(0, 0, 0, 0.04)',
                                        }
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