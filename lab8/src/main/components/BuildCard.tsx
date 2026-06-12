import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Building} from '../../data';
import {Box, Button, CardActions, Grid, Link} from '@mui/material';

interface BuildCardProps {
    building: Building,
    index: number
}

function BuildCard({building, index}: BuildCardProps) {

    return (
        <Grid key={index} size={{xs: 12, md: 6}}>
            <Card sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                mb: 4,
                height: 500
            }}>
                <CardMedia
                    component="img"
                    sx={{width: {xs: '100%', md: '45%'}, objectFit: 'cover'}}
                    image={building.img}
                    alt={building.title}
                />
                <Box sx={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Typography variant="h5" gutterBottom color="primary">
                            {building.title}
                        </Typography>
                        {building.description}
                    </CardContent>
                    <CardActions sx={{justifyContent: 'flex-end', p: 2}}>
                        <Button href={`/building/${index}`} variant="outlined" color="info">Подробнее</Button>
                    </CardActions>
                </Box>
            </Card>
        </Grid>
    );
}

export default BuildCard;