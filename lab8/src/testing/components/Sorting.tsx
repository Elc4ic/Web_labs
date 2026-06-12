import { tTasks } from '../quizData';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../quizSlice';
import SortableList from './SortableList';
import MuiGrid from '@mui/material/Grid';

const Grid = MuiGrid as any;

interface ComponentProps {
    index: number;
    tasks: tTasks;
}

function Sorting({ index, tasks }: ComponentProps) {
    const dispatch = useDispatch();

    useEffect(() => {
        const questions = tasks.map(t => t.question);
        const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
        dispatch(addList({ index, items: shuffledQuestions }));
    }, [dispatch, index, tasks]);

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
                <SortableList index={index} />
            </Grid>
        </Grid>
    );
}

export default Sorting;