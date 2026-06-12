import React from 'react';
import {useParams, Link as RouterLink} from 'react-router-dom';
import {
    Container,
    Typography,
    Breadcrumbs,
    Link,
    Box,
    Card,
    CardMedia,
    Paper,
    Divider,
    Stack,
    Slider
} from '@mui/material';
import MuiGrid from "@mui/material/Grid";
import {stations} from '../data';

const Grid = MuiGrid as any;

function Station() {
    const {id} = useParams<{ id: string }>();
    const [mt, setMt] = React.useState<number>(30);

    const handleChangeMb = (event: Event, newValue: number) => {
        setMt(newValue);
    };

    const station = stations.find(s => s.id === Number(id)) || stations[0];

    const specifications = [
        {label: 'Страна', value: station.country},
        {label: 'Регион / Локация', value: station.location},
        {label: 'Тип станции', value: station.type},
        {label: 'Год ввода', value: station.year},
        {label: 'Вид топлива', value: station.fuel},
        {label: 'Установленная мощность', value: `${station.power} МВт`},
        {label: 'Годовая выработка', value: `${station.output} млрд кВт⋅ч`},
    ];

    return (
        <Container maxWidth="xl" sx={{mt: 4, mb: 8}}>
            <Breadcrumbs aria-label="breadcrumb" sx={{mb: 4}}>
                <Link component={RouterLink} to="/" underline="hover" color="inherit">
                    Главная
                </Link>
                <Link component={RouterLink} to="/list" underline="hover" color="inherit">
                    Список станций
                </Link>
                <Typography>
                    {station.name}
                </Typography>
            </Breadcrumbs>

            <Typography variant="h3" component="h1" align="center" sx={{mb: 5, fontWeight: 'bold', color: '#333'}}>
                {station.name}
            </Typography>

            <Box sx={{width: {xs: '100%', md: '50%'}, mx: 'auto', mb: 6}}>
                <Card sx={{
                    borderRadius: '24px',
                    overflow: 'hidden'
                }}>
                    <CardMedia
                        component="img"
                        height="500"
                        image={station.img}
                        alt={station.name}
                        sx={{objectFit: 'cover'}}
                    />
                </Card>
            </Box>

            <Slider aria-label="Margin" value={mt} onChange={(e,v) => handleChangeMb(e,v)}/>

            <Grid container spacing={4} sx={{width: {xs: '100%', md: '80%'}, mx: 'auto',mt: mt}}>

                <Grid item xs={12} md={6}>
                    <Typography variant="h5" sx={{mb: 3, fontWeight: 'bold', display: 'inline-block', pb: 0.5}}>
                        Об электростанции
                    </Typography>
                    <Typography variant="body1" sx={{lineHeight: 1.8, fontSize: '1.1rem', color: '#555'}}>
                        {station.description || "Эта станция играет важнейшую роль в энергетической инфраструктуре своего региона."}
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper elevation={0}
                           sx={{p: 4, bgcolor: '#f8fbfc', border: '1px solid #e0f2fe', borderRadius: '20px'}}>
                        <Typography variant="h6" sx={{mb: 3, fontWeight: 'bold', color: '#00a1ff'}}>
                            Технические характеристики
                        </Typography>

                        <Grid container spacing={2}>
                            {specifications.map((spec, idx) => (
                                <React.Fragment key={idx}>
                                    <Grid item xs={6}>
                                        <Typography variant="body2" color="textSecondary" sx={{fontWeight: 500}}>
                                            {spec.label}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body1" sx={{fontWeight: 'bold', color: '#333'}}>
                                            {spec.value}
                                        </Typography>
                                    </Grid>
                                    {idx !== specifications.length - 1 && (
                                        <Grid item xs={12}>
                                            <Divider sx={{my: 0.5}}/>
                                        </Grid>
                                    )}
                                </React.Fragment>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    );
}

export default Station;