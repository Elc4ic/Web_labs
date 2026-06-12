import React from 'react';
import {FormControl, FormLabel, FormControlLabel, Checkbox, RadioGroup, Radio, Stack, Divider} from '@mui/material';
import {tSeries} from "./GroupChart";

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
            spacing={2}
            divider={<Divider orientation="vertical"/>}
            sx={{
                m: "20px 0",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <FormControl>
                <FormLabel id="label-radio-group">Тип диаграммы:</FormLabel>
                <RadioGroup
                    name="group-radio"
                    value={isBar ? "bar" : "line"}
                    onChange={handleRadioChange}
                >
                    <FormControlLabel value="bar" control={<Radio/>} label="Гистограмма"/>
                    <FormControlLabel value="line" control={<Radio/>} label="Линейная"/>
                </RadioGroup>
            </FormControl>

            <FormControl sx={{p: "8px", border: error ? "3px solid red" : "none"}}>
                <FormLabel id="label-checkbox-group">На диаграмме показать:</FormLabel>
                <FormControlLabel
                    control={<Checkbox checked={series['Максимальная высота']} onChange={handleCheckboxChange}
                                       name="Максимальная высота"/>}
                    label="максимальную высоту"
                />
                <FormControlLabel
                    control={<Checkbox checked={series['Средняя высота']} onChange={handleCheckboxChange}
                                       name="Средняя высота"/>}
                    label="среднюю высоту"
                />
                <FormControlLabel
                    control={<Checkbox checked={series['Минимальная высота']} onChange={handleCheckboxChange}
                                       name="Минимальная высота"/>}
                    label="минимальную высоту"
                />
            </FormControl>
        </Stack>
    );
}

export default SettingChart;