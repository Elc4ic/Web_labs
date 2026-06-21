import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, FormGroup, FormControlLabel, Checkbox, Box } from '@mui/material';
import { RootState } from '../store';
import { addList } from '../quizSlice';
import {tTasks} from "../quizData";

interface ComponentProps {
    index: number;
    tasks: tTasks;
}

function MultipleChoice({ index, tasks }: ComponentProps) {
    const dispatch = useDispatch();
    const selectedAnswers = useSelector((state: RootState) => state.lists.lists[index] || []);

    const shuffledTasks = useMemo(() => {
        return [...tasks].sort(() => Math.random() - 0.5);
    }, [tasks]);

    useEffect(() => {
        dispatch(addList({ index, items: [] }));
    }, [dispatch, index]);

    const handleToggle = (questionText: string) => {
        let newAnswers = [...selectedAnswers];

        if (newAnswers.includes(questionText)) {
            newAnswers = newAnswers.filter(item => item !== questionText);
        } else {
            newAnswers.push(questionText);
        }

        dispatch(addList({ index, items: newAnswers }));
    };

    return (
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
            <FormControl component="fieldset">
                <FormGroup>
                    {shuffledTasks.map((task, idx) => (
                        <FormControlLabel
                            key={idx}
                            control={
                                <Checkbox
                                    checked={selectedAnswers.includes(task.question)}
                                    onChange={() => handleToggle(task.question)}
                                />
                            }
                            label={task.question}
                        />
                    ))}
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default MultipleChoice;