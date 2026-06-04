import React, {useMemo, useState} from 'react';
import {TextField, Box, Typography, Grid} from '@mui/material';
import {Building} from '../../data';

interface FilterProps {
    data: Building[];
    children: (filtered: Building[]) => React.ReactNode;
}

const ContentFilter: React.FC<FilterProps> = ({data, children}) => {
    const [search, setSearch] = useState('');

    const filteredData = useMemo(() => {
        if (!search) return data;
        return data.filter(b => b.title.toLowerCase().includes(search.toLowerCase()));
    }, [search, data]);

    return (
        <Box>
            <Box sx={{mb: 4, display: 'flex', justifyContent: 'center'}}>
                <TextField
                    label="Поиск по названию..."
                    variant="outlined"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{width: '100%', maxWidth: 400}}
                />
            </Box>

            {filteredData.length === 0 ? (
                <Typography align="center" color="error" sx={{my: 10}}>
                    По вашему запросу «{search}» ничего не найдено.
                </Typography>
            ) : (
                <Grid container spacing={{xs: 3, md: 6}}>
                    {children(filteredData)}
                </Grid>
            )}
        </Box>
    );
};

export default ContentFilter;