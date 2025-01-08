import {Alert, Button, MenuItem, Select, Snackbar, Stack, Typography} from "@mui/material";
import { WithRunCodeComponent } from "@components/Quiz/QuestionTypes/WithRunCodeComponent";
import { WithOneRightAnswerComponent } from "@components/Quiz/QuestionTypes/WithOneRightAnswerComponent";
import { WithOpenAnswerComponent } from "@components/Quiz/QuestionTypes/WithOpenAnswerComponent";
import { WithMultipleAnswersComponent } from "@components/Quiz/QuestionTypes/WithMultipleAnswersComponent";
import {FormFieldsWrapper} from "@components/Wrappers/FormFiledWrapper/index.jsx";
import {useState} from "react";
import {QuizHeader} from "@components/Quiz/CreateNewQuiz/QuizHeader/index.jsx";
import {BuildQuizQuestion} from "@components/Quiz/CreateNewQuiz/BuildQuizQuestion";

export const CreateNewQuiz = () => {
    // ToDo: test data remove after testing
    const forWithRunCodeComponent = {
        number: 1,
        condition: 'Напишіть функцію, яка визначає чи чи є число простим',
        description: 'Результат виклику залогуйте:',
        language: 'py',
        placeholder: 'Please enter your code here',
        disabled: false,
    }

    const forWithPreconditionRunCodeComponent = {
        number: 2,
        condition: 'Маємо уривок коду. Розширити функцію isPrime(), щоб вона визначала чи є число простим',
        description: 'Функція повинна повернути True, якщо число просте, та False, якщо ні',
        language: 'js',
        placeholder: 'Please enter your code here',
        disabled: false,
        inputCode:`function isPrime () {
    // ########################################
    // Вкажіть ваш код тут
    // ########################################
}

const numb1 = 2;
const numb2 = 10;

console.log(isPrime(numb1, numb2))
`,
    }

    const oneRightAnswerComponent = {
        number: 3,
        condition: 'Який тип даних повертає функція "typeof NaN"',
        description: 'Some description here',
        options: [
            { value: 'number', label: 'number' },
            { value: 'string', label: 'string' },
            { value: 'boolean', label: 'boolean' },
            { value: 'function', label: 'function' },
        ],
    };


    const withMultipleAnswers = {
        number: 4,
        condition: 'Яка з наступних характеристик НЕ є характеристикою змінної',
        description: 'Оберіть одну або декілька відповідей:',
        options: [
            { label: "Змінна має ім'я"},
            { label: 'Змінна може мати тип даних'},
            { label: 'Змінна може зберігати значення'},
            { label: 'Змінна може використовуватись в будь якому місці програми'},
            { label: 'Змінна може бути динамічно створена під час виконання програми'},
        ],
    };

    const DEFAULT_QUIZ_HEADER = 'Назва тесту';

    const [open, setOpen] = useState(false)
    const [quizHeader, setQuizHeader] = useState(DEFAULT_QUIZ_HEADER)
    const [questions, setQuestions] = useState([]);

    const renderQuizQuestionByType = ({ type, options }) => {
        switch (type) {
            case 'OPEN_ANSWER':
                return (key) => <WithOpenAnswerComponent key={key} number={key + 1} {...options} />
            default:
                return () => <></>
        }
    }

    const handleAddQuestion = (questionOptions) =>
        setQuestions([...questions, renderQuizQuestionByType(questionOptions)])

    const onCreateQuiz = () => {
        setQuestions([]);
        setQuizHeader(DEFAULT_QUIZ_HEADER)
        setOpen(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Stack spacing={4}>
            <FormFieldsWrapper>
                <QuizHeader header={quizHeader} onChange={({target}) => setQuizHeader(target.value)} />
            </FormFieldsWrapper>
            <WithRunCodeComponent {...forWithRunCodeComponent} />
            <WithRunCodeComponent {...forWithPreconditionRunCodeComponent} />
            <WithOneRightAnswerComponent {...oneRightAnswerComponent} />
            <WithMultipleAnswersComponent {...withMultipleAnswers} />
            { questions.map((question, index) => question(index)) }
            <FormFieldsWrapper>
                <BuildQuizQuestion onCreateQuestion={handleAddQuestion} />
            </FormFieldsWrapper>
            <Button variant="outlined" size="large" color={'success'} onClick={onCreateQuiz}>
                <Typography style={{ fontWeight: 600 }}>Опублікувати</Typography>
            </Button>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleCloseSnackbar}>
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    The quiz successfully created!
                </Alert>
            </Snackbar>
        </Stack>
    );
};
