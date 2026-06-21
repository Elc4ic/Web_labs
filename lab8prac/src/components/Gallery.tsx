import React from 'react';
import {Box} from '@mui/material';

import i1 from '../image/i1 (1).png';
import i2 from '../image/i1 (2).png';
import i3 from '../image/i1 (3).png';
import i4 from '../image/i1 (4).png';
import i5 from '../image/i1 (5).png';
import i6 from '../image/i1 (6).png';


const Gallery = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateColumns: '30% 70%',
            overflow: 'hidden',
            mb: 5
        }}>
            <Box
                component="img"
                src={i1}
                alt="t"
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    display: 'block'
                }}
            />

            <Box sx={{
                height: '100%',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: 'repeat(3, 1fr)',
                minWidth: 0,
                minHeight: 0
            }}>
                <Box
                    component="img"
                    src={i2}
                    alt="t"
                    sx={{
                        gridColumn: 'span 2',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        display: 'block'
                    }}
                />

                {[i3, i4, i5, i6].map((src, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={src}
                        alt={`img${index}`}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            display: 'block'
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default Gallery;