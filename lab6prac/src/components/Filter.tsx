import React, { useState, useMemo } from 'react';
import {Box, TextField, MenuItem, Button, Typography, Grid} from '@mui/material';
import { Station } from '../data';

interface FilterProps {
    data: Station[];
    children: (filteredData: Station[]) => React.ReactNode;
}

const StationFilter: React.FC<FilterProps> = ({ data, children }) => {
    const init = { name: '', type: '', country: '' };
    const [filters, setFilters] = useState(init);

    const filteredData = useMemo(() => {
        return data.filter(s =>
            s.name.toLowerCase().includes(filters.name.toLowerCase()) &&
            (filters.type === '' || s.type === filters.type) &&
            s.country.toLowerCase().includes(filters.country.toLowerCase())
        );
    }, [filters, data]);

    const types = Array.from(new Set(data.map(s => s.type)));

    return (
        <Box sx={{ mb: 4, p: 3, bgcolor: 'white', borderRadius: 2, border: '1px solid #ddd' }}>
            <Typography variant="h6" gutterBottom color="primary">Фильтрация объектов</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <TextField fullWidth label="Поиск по названию" value={filters.name}
                               onChange={e => setFilters(p => ({ ...p, name: e.target.value }))} />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <TextField select fullWidth label="Тип станции" value={filters.type}
                               onChange={e => setFilters(p => ({ ...p, type: e.target.value }))}>
                        <MenuItem value="">Все типы</MenuItem>
                        {types.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                    </TextField>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Button fullWidth variant="outlined" sx={{ height: '56px' }}
                            onClick={() => setFilters(init)}>Сбросить фильтры</Button>
                </Grid>
            </Grid>
            {children(filteredData)}
        </Box>
    );
};

export default StationFilter;