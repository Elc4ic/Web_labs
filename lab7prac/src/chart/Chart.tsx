import React, {useState} from 'react';
import {Container, Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent} from '@mui/material';
import {BarChart} from '@mui/x-charts/BarChart';
import {LineChart} from '@mui/x-charts/LineChart';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {countries, typees, years, tGroup} from './groupdata';
import SettingChart, {tSeries} from './SettingChart';

function Chart() {
    const [group, setGroup] = useState<string>("Страна");
    const [groupData, setGroupData] = useState<tGroup>(countries);
    const [isBar, setIsBar] = useState<boolean>(true);

    const [seriesState, setSeriesState] = useState<tSeries>({
        'Максимальная мощность': true,
        'Средняя мощность': false,
        'Минимальная мощность': false,
    });

    const handleChange = (event: SelectChangeEvent) => {
        const selectedValue = event.target.value;
        setGroup(selectedValue);

        if (selectedValue === "Страна") setGroupData(countries);
        else if (selectedValue === "Год") setGroupData(years);
        else if (selectedValue === "Тип") setGroupData(typees);
    };

    const activeSeriesEntries = Object.entries(seriesState).filter(([_, isEnabled]) => isEnabled);
    const activeCount = activeSeriesEntries.length;

    const seriesY = activeSeriesEntries.map(([key]) => ({
        dataKey: key,
        label: key,
        ...(activeCount === 1 ? {barLabel: 'value' as const} : {}),
    }));

    const chartSetting = {
        yAxis: [{label: 'Мощность (МВт)'}],
        height: 400,
    };

    const columns: GridColDef[] = [
        {field: 'Группа', headerName: 'Группа', flex: 1},
        {field: 'Минимальная мощность', headerName: 'Минимальная мощность (МВт)', flex: 1, type: 'number'},
        {field: 'Максимальная мощность', headerName: 'Максимальная мощность (МВт)', flex: 1, type: 'number'},
        {field: 'Средняя мощность', headerName: 'Средняя мощность (МВт)', flex: 1, type: 'number'},
    ];

    return (
        <Container maxWidth="lg" sx={{py: 4}}>
            <Box sx={{width: "250px", mx: "auto", mb: 2}}>
                <FormControl fullWidth>
                    <InputLabel id="select-group-label">Группировать по</InputLabel>
                    <Select
                        labelId="select-group-label"
                        value={group}
                        label="Группировать по"
                        onChange={handleChange}
                    >
                        <MenuItem value="Страна">Стране</MenuItem>
                        <MenuItem value="Год">Году</MenuItem>
                        <MenuItem value="Тип">Типу</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <SettingChart
                series={seriesState}
                error={activeCount === 0}
                setSeries={setSeriesState}
                isBar={isBar}
                setIsBar={setIsBar}
            />
            {activeCount !== 0 && (
                <Box sx={{height: 400, mb: 5}}>
                    {isBar ? (
                        <BarChart
                            dataset={groupData}
                            xAxis={[{scaleType: 'band', dataKey: 'Группа'}]}
                            series={seriesY}
                            slotProps={{legend: {position: {vertical: 'bottom', horizontal: 'center'}}}}
                            {...chartSetting}
                        />
                    ) : (
                        <LineChart
                            dataset={groupData}
                            xAxis={[{scaleType: 'band', dataKey: 'Группа'}]}
                            series={seriesY}
                            slotProps={{legend: {position: {vertical: 'bottom', horizontal: 'center'}}}}
                            {...chartSetting}
                        />
                    )}
                </Box>
            )}

            <Box sx={{height: 800, width: '100%'}}>
                <DataGrid
                    rows={groupData}
                    columns={columns}
                    initialState={{pagination: {paginationModel: {pageSize: 5, page: 0}}}}
                    pageSizeOptions={[5, 10, 20]}
                />
            </Box>
        </Container>
    );
}

export default Chart;