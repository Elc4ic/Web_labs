import React from 'react';
import {Card, CardMedia, CardContent, Typography, Box, Chip, Divider, Grid} from '@mui/material';
import {Station} from '../data';

const StationCard: React.FC<{ station: Station, index: number }> = ({station, index}) => {
    const isEven = index % 2 === 0;

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: {xs: 'column', md: isEven ? 'row' : 'row-reverse'},
            mb: 3, transition: '0.3s', '&:hover': {boxShadow: 4}
        }}>
            <CardMedia component="img" sx={{width: {xs: '100%', md: '40%'}, height: 280}}
                       image={station.img} alt={station.name}/>
            <Box sx={{flex: 1, p: 2, display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flexGrow: 1}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'start'}}>
                        <Typography variant="h5" color="primary.main">{station.name}</Typography>
                        <Chip label={station.type} size="small" color="info"/>
                    </Box>
                    <Typography variant="subtitle2" color="text.secondary" sx={{mb: 2}}>
                        {station.location}, {station.country}
                    </Typography>
                    <Divider sx={{my: 1}}/>
                    <Grid container spacing={2} sx={{mt: 1}}>
                        <Grid size={{xs: 6}}>
                            <Typography variant="caption" sx={{display: 'block', color: 'gray'}}>Мощность</Typography>
                            <Typography variant="body1" sx={{fontWeight: 'bold'}}>{station.power} МВт</Typography>
                        </Grid>
                        <Grid size={{xs: 6}}>
                            <Typography variant="caption" sx={{display: 'block', color: 'gray'}}>Год ввода</Typography>
                            <Typography variant="body1" sx={{fontWeight: 'bold'}}>{station.year}</Typography>
                        </Grid>
                        <Grid size={{xs: 6}}>
                            <Typography variant="caption" sx={{display: 'block', color: 'gray'}}>Выработка</Typography>
                            <Typography variant="body1" sx={{fontWeight: 'bold'}}>{station.output} ТВтч/г</Typography>
                        </Grid>
                        <Grid size={{xs: 6}}>
                            <Typography variant="caption" sx={{display: 'block', color: 'gray'}}>Топливо</Typography>
                            <Typography variant="body2">{station.fuel}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Box>
        </Card>
    );
};

export default StationCard;