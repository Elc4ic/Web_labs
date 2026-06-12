import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {years, countries, typees} from './groupdata';
import GroupGrid from './components/GroupGrid';
import GroupChart from './components/GroupChart';

type tSelect = "Страна" | "Год" | "Тип";

function Chart() {
    const [group, setGroup] = useState<tSelect>("Страна");
    const [groupData, setGroupData] = useState<any[]>(countries);

    const handleChange = (event: SelectChangeEvent) => {
        const selectedValue = event.target.value as tSelect;
        setGroup(selectedValue);

        if (selectedValue === "Страна") setGroupData(countries);
        else if (selectedValue === "Год") setGroupData(years);
        else if (selectedValue === "Тип") setGroupData(typees);
    };

    return (
        <div>
            <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                <Box sx={{width: "250px", mx: "auto", mb: 4}}>
                    <FormControl fullWidth>
                        <InputLabel id="select-group-label">Группировать по</InputLabel>
                        <Select
                            labelId="select-group-label"
                            id="select-group"
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

                <GroupChart data={groupData}/>
                <Box sx={{mt: 5}}>
                    <GroupGrid data={groupData}/>
                </Box>
            </Container>
        </div>
    );
}

export default Chart;