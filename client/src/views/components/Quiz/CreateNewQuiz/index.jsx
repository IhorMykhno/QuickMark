import { Stack } from "@mui/material";
import { CodeInputFiledComponent } from "@components/FormFields/CodeInputFiled";
import { WithRunCodeComponent } from "@components/Quiz/QuestionTypes/WithRunCodeComponent";

/*
* ToDo:
*  1. When user open the page it's will see the creat test form
*  2. When the user creates one of the tests, the created test will be added above the create test form
*  3. When user finish to create the quiz it need to click on the "Save Quiz" button to save it
* */

export const CreateNewQuiz = () => {
    // ToDo: test data remove after testing
    const forWithRunCodeComponent = {
        number: 2,
        condition: 'Some information here',
        description: 'Some description here',
        language: 'js',
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
}
        `,
    }

    return (
        <Stack spacing={4}>
            <WithRunCodeComponent {...forWithRunCodeComponent} />
            <WithRunCodeComponent {...forWithPreconditionRunCodeComponent} />
            <CodeInputFiledComponent />
        </Stack>
    );
};
