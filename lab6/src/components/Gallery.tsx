import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar, Container, Box } from '@mui/material';
import { structures } from '../data';

const Gallery = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Box sx={{ height: 600, overflowY: 'scroll', borderRadius: 2, border: '1px solid #eee', p: 1,mb:3}}>
                <ImageList variant="masonry" gap={8} sx={{
                    columnCount: {
                        xs: '1 !important',
                        sm: '2 !important',
                        md: '3 !important',
                        lg: '4 !important',
                    },
                }}>
                    {structures.map((item) => (
                        <ImageListItem key={item.img}>
                            <img src={item.img} alt={item.title} loading="lazy" style={{ borderRadius: 4 }} />
                            <ImageListItemBar title={item.title} position="bottom" />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
};

export default Gallery;