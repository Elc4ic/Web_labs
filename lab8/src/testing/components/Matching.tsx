import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import MuiGrid from '@mui/material/Grid';
import {tTasks} from '../quizData';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addList} from '../quizSlice';
import SortableList from './SortableList';

const Grid = MuiGrid as any;

interface ComponentProps {
    index: number;
    tasks: tTasks;
}

function Matching({index, tasks}: ComponentProps) {
    const dispatch = useDispatch();

    useEffect(() => {
        const answers = tasks.map(t => t.answer);
        const shuffledAnswers = [...answers].sort(() => Math.random() - 0.5);
        dispatch(addList({index, items: shuffledAnswers}));
    }, [dispatch, index, tasks]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <List sx={{pt: 0}}>
                    {tasks.map((item, idx) => (
                        <ListItem key={idx} sx={{p: 0, mb: 1}}>
                            <ListItemButton sx={{
                                border: '1px solid gray',
                                borderRadius: '5px',
                                textAlign: 'right',
                                cursor: 'default'
                            }}>
                                <ListItemText primary={item.question}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid item xs={12} md={6}>
                <SortableList index={index}/>
            </Grid>
        </Grid>
    );
}

export default Matching;