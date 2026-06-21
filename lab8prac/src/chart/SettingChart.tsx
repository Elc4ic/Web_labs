import React from 'react';
import {FormControl, FormLabel, FormControlLabel, Checkbox, RadioGroup, Radio, Stack, Divider} from '@mui/material';

// Тип для состояния чекбоксов
export type tSeries = {
    'Максимальная мощность': boolean;
    'Средняя мощность': boolean;
    'Минимальная мощность': boolean;
};

type CheckboxProps = {
    series: tSeries;
    error: boolean;
    setSeries: React.Dispatch<React.SetStateAction<tSeries>>;
    isBar: boolean;
    setIsBar: React.Dispatch<React.SetStateAction<boolean>>;
};

function SettingChart({series, error, setSeries, isBar, setIsBar}: CheckboxProps) {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeries({
            ...series,
            [event.target.name]: event.target.checked,
        });
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsBar(event.target.value === 'bar');
    };

    return (
        <Stack
            direction="row"
            spacing={4}
            divider={<Divider orientation="vertical" flexItem/>}
            sx={{m: "20px 0", justifyContent: "center", alignItems: "center"}}
        >
            <FormControl>
                <FormLabel id="label-radio-group">Тип диаграммы:</FormLabel>
                <RadioGroup row name="group-radio" value={isBar ? "bar" : "line"} onChange={handleRadioChange}>
                    <FormControlLabel value="bar" control={<Radio/>} label="Гистограмма"/>
                    <FormControlLabel value="line" control={<Radio/>} label="Линейная"/>
                </RadioGroup>
            </FormControl>

            <FormControl sx={{p: "12px", border: error ? "2px solid red" : "2px solid transparent", borderRadius: 1}}>
                <FormLabel sx={{color: error ? 'red' : 'inherit', mb: 1}}>На диаграмме показать:</FormLabel>
                <Stack direction="row" spacing={2}>
                    <FormControlLabel
                        control={<Checkbox checked={series['Максимальная мощность']} onChange={handleCheckboxChange}
                                           name="Максимальная мощность"/>}
                        label="максимальную"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={series['Средняя мощность']} onChange={handleCheckboxChange}
                                           name="Средняя мощность"/>}
                        label="среднюю"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={series['Минимальная мощность']} onChange={handleCheckboxChange}
                                           name="Минимальная мощность"/>}
                        label="минимальную"
                    />
                </Stack>
            </FormControl>
        </Stack>
    );
}

export default SettingChart;