import React from 'react';
import buildings from '../table';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';

function BuildingsGrid() {
    const rows: GridRowsProp = buildings;
    const columns: GridColDef[] = [
        { field: 'Название', headerName: 'Название', flex: 1 },
        { field: 'Тип', headerName: 'Тип', flex: 0.5 },
        { field: 'Страна', headerName: 'Страна', flex: 0.5 },
        { field: 'Город', headerName: 'Город', flex: 0.5 },
        { field: 'Год', headerName: 'Год', flex: 0.3 },
        { field: 'Высота', headerName: 'Высота', flex: 0.4 },
    ];

    return (
        <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={rows}
                columns={columns}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    }
                }}
            />
        </Container>
    );
}

export default BuildingsGrid;