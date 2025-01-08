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
        number: 2,
        condition: 'Some information here',
        description: 'Some description here',
        language: 'py',
        placeholder: 'Please enter your code here',
        disabled: false,
    }

    const forWithPreconditionRunCodeComponent = {
        number: 3,
        condition: 'Some information here',
        description: 'Some description here',
        language: 'js',
        placeholder: 'Please enter your code here',
        disabled: false,
        inputCode:`function test () {
    // Here code
}`,
    }

    const oneRightAnswerComponent = {
        number: 4,
        condition: 'Some information here',
        description: 'Some description here',
        options: [
            { value: 'answer1', label: 'Answer1' },
            { value: 'answer2', label: 'Answer2' },
            { value: 'answer3', label: 'Answer3' },
        ],
    };


    const withMultipleAnswers = {
        number: 6,
        condition: 'Some information here',
        description: 'Some description here',
        options: [
            { label: 'Selected 1'},
            { label: 'Selected 2'},
            { label: 'Selected 3'},
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
