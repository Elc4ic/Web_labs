import React from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import { Container, Typography } from '@mui/material';
import { stations } from './data';

function List() {
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Название', flex: 1.5 },
        { field: 'type', headerName: 'Тип', flex: 0.8 },
        { field: 'country', headerName: 'Страна', flex: 1 },
        { field: 'location', headerName: 'Локация', flex: 1 },
        { field: 'power', headerName: 'Мощность (МВт)', flex: 1, type: 'number' },
        { field: 'year', headerName: 'Год', flex: 0.8, type: 'number' },
        { field: 'fuel', headerName: 'Топливо', flex: 1 },
    ];

    return (
        <Container maxWidth="xl" sx={{ py: 4, flexGrow: 1 }}>
            <Typography variant="h4" sx={{ mb: 3, color: '#00a1ff', fontWeight: 'bold' }}>Сводная таблица станций</Typography>
            <div style={{ height: 600, width: '100%', backgroundColor: 'white' }}>
                <DataGrid
                    rows={stations}
                    columns={columns}
                    localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{ toolbar: { showQuickFilter: true } }}
                />
            </div>
        </Container>
    );
}
export default List;