import React from 'react';
import {Container, Box} from '@mui/material';
import StationCard from '../components/StationCard';
import {stations} from '../data';
import Gallery from "../components/Gallery";

function Main() {
    return (
        <Container maxWidth="xl" sx={{py: 5, gap: 6}}>
            <Gallery/>
            <Box sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                justifyContent: 'left',
                mb: 3,
                gap: 3
            }}>
                <Box sx={{width: {xs: '100%', md: '23%'}}}><StationCard station={stations[0]}/></Box>
                <Box sx={{width: {xs: '100%', md: '50%'}}}><StationCard station={stations[1]}/></Box>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                justifyContent: 'space-between',
                mb: 3,
                gap: 3
            }}>
                <Box sx={{width: {xs: '100%', md: '31%'}}}><StationCard station={stations[2]}/></Box>
                <Box sx={{width: {xs: '100%', md: '31%'}}}><StationCard station={stations[3]}/></Box>
                <Box sx={{width: {xs: '100%', md: '31%'}}}><StationCard station={stations[4]}/></Box>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: {xs: 'column', md: 'row'},
                justifyContent: 'right',
                mb: 5,
                gap: 4
            }}>
                <Box sx={{width: {xs: '100%', md: '50%'}}}><StationCard station={stations[5]}/></Box>
                <Box sx={{width: {xs: '100%', md: '23%'}}}><StationCard station={stations[6]}/></Box>
            </Box>
        </Container>
    );
}

export default Main;