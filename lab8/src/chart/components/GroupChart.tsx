import React, {useState} from 'react';
import {BarChart} from '@mui/x-charts/BarChart';
import {LineChart} from '@mui/x-charts/LineChart';
import Container from '@mui/material/Container';
import SettingChart from './SettingChart';

export type tSeries = {
    'Максимальная высота': boolean;
    'Средняя высота': boolean;
    'Минимальная высота': boolean;
};

type GroupChartProps = {
    data: any[];
};

function GroupChart({data}: GroupChartProps) {
    const [isBar, setIsBar] = useState<boolean>(true);

    const [seriesState, setSeriesState] = useState<tSeries>({
        'Максимальная высота': true,
        'Средняя высота': false,
        'Минимальная высота': false,
    });

    const activeSeriesEntries = Object.entries(seriesState).filter(([_, isEnabled]) => isEnabled);
    const activeCount = activeSeriesEntries.length;

    const seriesY = activeSeriesEntries.map(([key]) => ({
        dataKey: key,
        label: key,
        ...(activeCount === 1 ? {barLabel: 'value' as const} : {}),
    }));

    const chartSetting = {
        yAxis: [{label: 'Высота (м)'}],
        height: 400,
    };

    return (
        <Container maxWidth="lg">
            <SettingChart
                series={seriesState}
                error={activeCount === 0}
                setSeries={setSeriesState}
                isBar={isBar}
                setIsBar={setIsBar}
            />
            {activeCount !== 0 && (
                isBar ? (
                    <BarChart
                        dataset={data}
                        xAxis={[{scaleType: 'band', dataKey: 'Группа'}]}
                        series={seriesY}
                        slotProps={{
                            legend: {
                                position: {vertical: 'bottom', horizontal: 'center'},
                            },
                        }}
                        {...chartSetting}
                    />
                ) : (
                    <LineChart
                        dataset={data}
                        xAxis={[{scaleType: 'band', dataKey: 'Группа'}]}
                        series={seriesY}
                        slotProps={{
                            legend: {
                                position: {vertical: 'bottom', horizontal: 'center'},
                            },
                        }}
                        {...chartSetting}
                    />
                )
            )

            }
        </Container>
    );
}

export default GroupChart;