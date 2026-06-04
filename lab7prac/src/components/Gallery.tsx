import React from 'react';
import { Box, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { stations } from '../data';

const Gallery = () => {
    const images = stations.filter(s => s.img !== "");

    return (
        <Box sx={{ height: 400, overflowY: 'auto', borderRadius: 2, border: '1px solid #eee', p: 2 }}>
            <ImageList variant="masonry" cols={3} gap={16}>
                {images.map((item) => (
                    <ImageListItem key={item.id}>
                        <img
                            src={item.img}
                            alt={item.name}
                            loading="lazy"
                            style={{ borderRadius: 8 }}
                        />
                        <ImageListItemBar
                            title={item.name}
                            position="bottom"
                            sx={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default Gallery;