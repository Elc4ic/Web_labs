import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import { Station } from '../data';

interface StationCardProps {
    station: Station;
}

const StationCard: React.FC<StationCardProps> = ({ station }) => {
    if (station.typeCard === 'text-only') {
        return (
            <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {station.name}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                    {station.location}
                </Typography>
                <Link href="#" underline="hover" sx={{ color: '#6a0dad', fontSize: '0.875rem' }}>
                    Подробнее»
                </Link>
            </Box>
        );
    }

    const isBlue = station.typeCard === 'blue-card';
    const bgColor = isBlue ? '#8cd3ff' : '#dfc79b';

    return (
        <Box
            sx={{
                bgcolor: bgColor,
                borderRadius: '30px',
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: isBlue ? 'row' : 'column',
                alignItems: 'center',
                gap: 3,
                boxShadow: 2
            }}
        >
            <Box
                component="img"
                src={station.img}
                alt={station.name}
                sx={{
                    width: isBlue ? '40%' : '100%',
                    height: isBlue ? '200px' : '150px',
                    objectFit: 'cover',
                    borderRadius: '20px'
                }}
            />

            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {station.name}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, fontSize: '0.85rem' }}>
                    {station.location}
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        mt: 'auto',
                        bgcolor: '#00a1ff',
                        borderRadius: '20px',
                        textTransform: 'none',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                        '&:hover': { bgcolor: '#0081cc' }
                    }}
                >
                    Подробнее
                </Button>
            </Box>
        </Box>
    );
}

export default StationCard;