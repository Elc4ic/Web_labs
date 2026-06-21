import {Box, Button, Container, Typography} from '@mui/material';
import {quiz} from '../quizData';
import Matching from './Matching';
import Sorting from './Sorting';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {setResults} from '../quizSlice';
import {useState} from 'react';
import SingleChoice from "./SingleChoice";
import MultipleChoice from "./MultipleChoice";

function Quiz() {
    const dispatch = useDispatch();
    const lists = useSelector((state: RootState) => state.lists.lists);
    const results = useSelector((state: RootState) => state.lists.results);
    const [resetKey, setResetKey] = useState(0);

    const [sum, setSum] = useState<number>(0);

    const [error, setError] = useState<string | null>(null);

    const handleCheck = () => {
        let hasEmptyAnswers = false;

        for (let qIndex = 0; qIndex < quiz.length; qIndex++) {
            const userAnswers = lists[qIndex];
            if (!userAnswers || userAnswers.length === 0) {
                hasEmptyAnswers = true;
                break;
            }
        }

        if (hasEmptyAnswers) {
            setError('Дайте ответ на все задания, прежде чем завершить тест.');
            return;
        }

        setError(null);

        const newResults: string[] = [];

        quiz.forEach((q, qIndex) => {
            const userAnswers = lists[qIndex] || [];
            let correctCount = 0;
            let maxScore = q.tasks.length;

            if (q.type === 'M') {
                q.tasks.forEach((task, i) => {
                    if (task.answer === userAnswers[i]) correctCount++;
                });
            } else if (q.type === 'S') {
                q.tasks.forEach((task) => {
                    const expectedIndex = parseInt(task.answer.toString()) - 1;
                    if (userAnswers[expectedIndex] === task.question) correctCount++;
                });
            } else if (q.type === 'O') {
                maxScore = 1;

                const correctTask = q.tasks.find(t => t.answer === '1' || t.answer === 'true' || t.answer === true);

                const isUserCorrect = Array.isArray(userAnswers)
                    ? userAnswers.includes(correctTask?.question as string)
                    : userAnswers === correctTask?.question;

                if (isUserCorrect) {
                    correctCount = 1;
                }
            } else if (q.type === 'Z') {

                const correctOptions = q.tasks
                    .filter(t => t.answer === true)
                    .map(t => t.question);

                maxScore = correctOptions.length;

                const userSelected = Array.isArray(userAnswers) ? userAnswers : [userAnswers];
                correctCount = userSelected.filter(ans => correctOptions.includes(ans)).length;
            }

            if (correctCount === maxScore) {
                setSum(prev => prev + 1);
                newResults.push(`Задание ${qIndex + 1}. Все ответы верные.`);
            } else {
                newResults.push(`Задание ${qIndex + 1}. Верных ответов: ${correctCount} из ${maxScore}.`);
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

                    {item.type === 'M' && <Matching index={index} tasks={item.tasks}/>}
                    {item.type === 'S' && <Sorting index={index} tasks={item.tasks}/>}
                    {item.type === 'O' && <SingleChoice index={index} tasks={item.tasks}/>}
                    {item.type === 'Z' && <MultipleChoice index={index} tasks={item.tasks}/>}
                </Box>
            ))}

            {error && (
                <Typography
                    variant="h6"
                    color="error"
                    sx={{textAlign: 'center', mt: 3, fontWeight: 'bold'}}
                >
                    {error}
                </Typography>
            )}

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
                    <Typography variant="body1">{sum}</Typography>
                </Box>
            )}
        </Container>
    );
}

export default Quiz;