import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Button, Typography, Box, styled, Grid} from '@mui/material';
import {Building} from '../data';

const StyledDesc = styled(Typography)(({theme}) => ({
    color: theme.palette.text.secondary,
    textAlign: 'justify',
    textIndent: '20px',
    marginBottom: '10px'
}));

interface BuildCardProps {
    building: Building,
    index: number
}

function BuildCard({building, index}: BuildCardProps) {

    return (
        <Grid key={index} size={{xs: 12, md: 3}}>
            <Card sx={{
                display: 'flex',
                flexDirection: {xs: 'row', md: 'column', align:"center"},
                mb: 4,
                minHeight: 350
            }}>
                <CardMedia
                    component="img"
                    sx={{width: {xs: '100%', md: '100%'}, objectFit: 'cover'}}
                    image={building.img}
                    alt={building.title}
                />
                <Box sx={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Typography variant="h5" gutterBottom color="primary">
                            {building.title}
                        </Typography>
                        {building.description.map((p, i) => (
                            <StyledDesc key={i} variant="body2">{p}</StyledDesc>
                        ))}
                    </CardContent>
                    <CardActions sx={{justifyContent:'flex-end', p: 2}}>
                        <Button variant="outlined" color="info">Подробнее</Button>
                    </CardActions>
                </Box>
            </Card>
        </Grid>
    );
}

export default BuildCard;