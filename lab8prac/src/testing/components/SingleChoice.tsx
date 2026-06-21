import {ChangeEvent, useEffect, useMemo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import { RootState } from '../store';
import { addList } from '../quizSlice';
import {tTasks} from "../quizData";

interface ComponentProps {
    index: number;
    tasks: tTasks;
}

function SingleChoice({ index, tasks }: ComponentProps) {
    const dispatch = useDispatch();
    const selectedAnswers = useSelector((state: RootState) => state.lists.lists[index] || []);

    const shuffledTasks = useMemo(() => {
        return [...tasks].sort(() => Math.random() - 0.5);
    }, [tasks]);

    useEffect(() => {
        dispatch(addList({ index, items: [] }));
    }, [dispatch, index]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(addList({ index, items: [event.target.value] }));
    };

    return (
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
            <FormControl component="fieldset">
                <RadioGroup
                    value={selectedAnswers.length > 0 ? selectedAnswers[0] : ''}
                    onChange={handleChange}
                >
                    {shuffledTasks.map((task, idx) => (
                        <FormControlLabel
                            key={idx}
                            value={task.question}
                            control={<Radio />}
                            label={task.question}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </Box>
    );
}

export default SingleChoice;