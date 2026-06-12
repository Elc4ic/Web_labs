import React from 'react';
import {Link} from 'react-router-dom';
import structures from '../../data';
import Container from '@mui/material/Container';
import {Box, ImageList, ImageListItem, ImageListItemBar} from '@mui/material';

function Gallery() {
    return (
        <Container maxWidth="lg" sx={{mt: 5}}>
            <Box sx={{height: 600, overflowY: 'scroll', borderRadius: 2, border: '1px solid #eee', p: 1, mb: 3}}>
                <ImageList variant="masonry" gap={8} sx={{
                    columnCount: {
                        xs: '1 !important',
                        sm: '2 !important',
                        md: '3 !important',
                        lg: '4 !important',
                    },
                }}>
                    {structures.map((item,index) => (
                        <Link to={`/building/${index}`} style={{textDecoration: 'none', color: 'inherit'}}>
                            <ImageListItem key={item.img}>
                                <img src={item.img} alt={item.title} loading="lazy" style={{borderRadius: 4}}/>
                                <ImageListItemBar title={item.title} position="bottom"/>
                            </ImageListItem>
                        </Link>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
}

export default Gallery;