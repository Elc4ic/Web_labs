import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import Box from '@mui/material/Box';

type GroupProps = {
    data: any[];
};

function GroupGrid({ data }: GroupProps) {
    if (!data || data.length === 0) return null;

    const columns: GridColDef[] = [
        { field: 'Группа', headerName: 'Группа', flex: 1 },
        { field: 'Минимальная высота', headerName: 'Минимальная высота', flex: 1, type: 'number' },
        { field: 'Максимальная высота', headerName: 'Максимальная высота', flex: 1, type: 'number' },
        { field: 'Средняя высота', headerName: 'Средняя высота', flex: 1, type: 'number' },
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                initialState={{
                    pagination: {
                        paginationModel: { pageSize: 5, page: 0 },
                    },
                }}
                pageSizeOptions={[5, 10, 20]}
            />
        </Box>
    );
}

export default GroupGrid;