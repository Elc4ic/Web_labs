import {Box, Button, Container, Typography} from '@mui/material';
import {quiz} from '../quizData';
import Matching from './Matching';
import Sorting from './Sorting';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {setResults} from '../quizSlice';
import {useState} from 'react';

function Quiz() {
    const dispatch = useDispatch();
    const lists = useSelector((state: RootState) => state.lists.lists);
    const results = useSelector((state: RootState) => state.lists.results);
    const [resetKey, setResetKey] = useState(0);

    const handleCheck = () => {
        const newResults: string[] = [];

        quiz.forEach((q, qIndex) => {
            const userAnswers = lists[qIndex];
            if (!userAnswers) return;

            let correctCount = 0;

            if (q.type === 'M') {
                q.tasks.forEach((task, i) => {
                    if (task.answer === userAnswers[i]) correctCount++;
                });
            } else if (q.type === 'S') {
                q.tasks.forEach((task) => {
                    const expectedIndex = parseInt(task.answer) - 1;
                    if (userAnswers[expectedIndex] === task.question) correctCount++;
                });
            }

            if (correctCount === q.tasks.length) {
                newResults.push(`Задание ${qIndex + 1}. Все ответы верные.`);
            } else {
                newResults.push(`Задание ${qIndex + 1}. Верных ответов: ${correctCount} из ${q.tasks.length}.`);
            }
        });

        dispatch(setResults(newResults));
    };

    const handleReset = () => {
        dispatch(setResults(null));
        setResetKey(prev => prev + 1);
    };

    return (
        <Container maxWidth="md" key={resetKey}>
            {quiz.map((item, index) => (
                <Box key={item.id} component="section" sx={{m: 2, p: 2}}>
                    <Typography variant="h5" gutterBottom>
                        {index + 1}. {item.title}
                    </Typography>

                    {item.type === 'M' ? (<Matching index={index} tasks={item.tasks}/>)
                        : (<Sorting index={index} tasks={item.tasks}/>)}
                </Box>
            ))}

            <Box sx={{display: 'flex', justifyContent: 'center', gap: 2, mt: 4}}>
                <Button variant="contained" onClick={handleCheck}>Проверить</Button>
                <Button variant="contained" onClick={handleReset}>Начать снова</Button>
            </Box>

            {results && (
                <Box sx={{mt: 5, textAlign: 'center'}}>
                    <Typography variant="h5" gutterBottom>Результаты теста</Typography>
                    {results.map((res, i) => (
                        <Typography key={i} variant="body1">{res}</Typography>
                    ))}
                </Box>
            )}
        </Container>
    );
}

export default Quiz;