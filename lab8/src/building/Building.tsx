import React from 'react';
import {useParams, Link as RouterLink} from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import MuiGrid from '@mui/material/Grid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {structures} from '../data';

const Grid = MuiGrid as any;

function Building() {
    const {id} = useParams<{ id: string }>();

    const index = id ? parseInt(id, 10) : 0;
    const building = structures[index] || structures[0];

    return (
        <div>
            <Container maxWidth="lg" sx={{mt: 3, mb: 5}}>
                <Breadcrumbs aria-label="breadcrumb" sx={{mb: 3}}>
                    <Link component={RouterLink} to="/" underline="hover" color="inherit">
                        Главная
                    </Link>
                    <Typography color="text.primary">{building.title}</Typography>
                </Breadcrumbs>

                <Typography variant="h4" component="h1" align="center" sx={{mb: 4, fontWeight: 'bold'}}>
                    {building.title}
                </Typography>

                <Grid container spacing={4} justifyContent="center" sx={{flexDirection: "column"}}>
                    <Grid item xs={12}>
                        <Card sx={{width: "100%", boxShadow: 3, align: 'center'}}>
                            <CardMedia
                                component="img"
                                height="450"
                                image={building.img}
                                alt={building.title}
                                sx={{objectFit: 'cover'}}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sx={{mt: 2}}>
                        <Box sx={{columnCount: {xs: 1, md: 2}, columnGap: 4}}>
                            {building.description.map((paragraph, idx) => (
                                <Typography key={idx} variant="body1" sx={{lineHeight: 1.8}}>
                                    {paragraph}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
}

export default Building;