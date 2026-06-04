import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar, Box, Typography } from '@mui/material';
import { stations } from '../data';

const Gallery = () => {
    const galleryItems = stations.slice(0, 12);

    return (
        <Box sx={{ mb: 6 }}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 300 }}>Фотогалерея объектов</Typography>
            <Box sx={{ height: 500, overflowY: 'auto', borderRadius: 2, p: 1, bgcolor: '#eee' }}>
                <ImageList variant="masonry" cols={3} gap={10}>
                    {galleryItems.map((item) => (
                        <ImageListItem key={item.name}>
                            <img src={item.img} alt={item.name} loading="lazy" style={{ borderRadius: '4px' }} />
                            <ImageListItemBar title={item.name} subtitle={item.country} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
};

export default Gallery;