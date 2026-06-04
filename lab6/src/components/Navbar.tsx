import React, {useState} from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Box,
    Button,
    IconButton,
    Drawer,
    MenuItem,
    styled,
    MenuList
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    border: '1px solid',
    borderColor: theme.palette.divider,
    padding: '8px 12px',
    mt: '28px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
}));


interface NavbarProps {
    active: string;
    onPageChange: (id: string) => void;
}

function Navbar({active, onPageChange}: NavbarProps) {
    const [open, setOpen] = useState(false);

    const menuItems = [
        {id: "1", label: "Главная"},
        {id: "2", label: "Галерея"},
        {id: "3", label: "Контакты"}
    ];

    const handleNav = (id: string) => {
        onPageChange(id);
        setOpen(false);
    };

    return (
        <AppBar position="static" sx={{boxShadow: 0, bgcolor: 'transparent'}}>
            <Container maxWidth="xl">
                <StyledToolbar>
                    <Typography variant="h6" sx={{color: '#5d8aa8', flexGrow: 1}}>
                        амые высокие здания и сооружения
                    </Typography>

                    <Box sx={{display: {xs: 'none', md: 'flex'}, gap: 1}}>
                        {menuItems.map((item) => (
                            <Button
                                key={item.id}
                                disabled={active === item.id}
                                variant={active === item.id ? "contained" : "text"}
                                onClick={() => handleNav(item.id)}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>

                    <IconButton sx={{display: {xs: 'flex', md: 'none'}}} onClick={() => setOpen(true)}>
                        <MenuIcon/>
                    </IconButton>
                </StyledToolbar>
            </Container>

            <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
                <Box sx={{p: 2, display: 'flex', justifyContent: 'flex-end'}}>
                    <IconButton onClick={() => setOpen(false)}><CloseRoundedIcon/></IconButton>
                </Box>
                <MenuList>
                    {menuItems.map((item) => (
                        <MenuItem
                            key={item.id}
                            selected={active === item.id}
                            disabled={active === item.id}
                            onClick={() => handleNav(item.id)}
                            sx={{ justifyContent: 'center', py: 2 }}
                        >
                            {item.label}
                        </MenuItem>
                    ))}
                </MenuList>
            </Drawer>
        </AppBar>
    );
}

export default Navbar;