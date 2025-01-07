import { Button, MenuItem, Select, Stack, Typography } from "@mui/material";
import { InputField } from "@components/Customised/InputField/index.jsx";
import {useState} from "react";
import PropTypes from "prop-types";

export const BuildQuizQuestion = ({ onCreateQuestion }) => {
    const QUESTION_TYPE = 'OPEN_ANSWER';
    const QUESTION_OPTIONS = {
        condition: '',
    };

    const [questionType, setQuestionType] = useState(QUESTION_TYPE);
    const [questionOptions, setQuestionOptions] = useState(QUESTION_OPTIONS);

    const QUESTION_TYPES = [
        { value: 'RUN_CODE', label: 'З запуском коду'},
        { value: 'PRECONDITION_RUN_CODE', label: 'З передумовою та запуском коду'},
        { value: 'ONE_ANSWER', label: 'З варіантами відповіді'},
        { value: 'MULTI_ANSWERS', label: 'З декільками відповідями'},
        { value: 'OPEN_ANSWER', label: 'З відкритою відповіддю'},
    ];

    const onChangeTestType = ({ target }) => setQuestionType(target.value);

    const onChangeCondition = ({ target }) =>
        setQuestionOptions(prevState => ({...prevState, condition: target.value }))

    const handleAddQuestion = () => {
        onCreateQuestion({type: questionType, options: questionOptions});
        setQuestionType(QUESTION_TYPE);
        setQuestionOptions(QUESTION_OPTIONS);
    };

    return (
        <Stack spacing={3}>
            <Typography variant={'h5'}>Створити нове завдання</Typography>
            <Stack spacing={3} direction={'row'}>
                <InputField
                    multiline
                    label={'Запитання'}
                    value={questionOptions.condition}
                    sx={{ minWidth: 500 }}
                    onChange={onChangeCondition}
                />
                <Stack>
                    <Select
                        value={questionType}
                        size={'small'}
                        onChange={onChangeTestType}
                        sx={{ minWidth: 300 }}
                    >
                        {QUESTION_TYPES.map(({value, label}, index) => (
                            <MenuItem key={index} value={value}>{label}</MenuItem>
                        ))}
                    </Select>
                </Stack>
            </Stack>
            <Button onClick={handleAddQuestion}>Додати завдання</Button>
        </Stack>
    );
}

BuildQuizQuestion.propTypes = {
    onCreateQuestion: PropTypes.func.isRequired,
}
