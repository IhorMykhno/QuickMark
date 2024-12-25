import { Stack } from "@mui/material";
import { CodeInputFiledComponent } from "@components/FormFields/CodeInputFiled/index.jsx";

/*
* ToDo:
*  1. When user open the page it's will see the creat test form
*  2. When the user creates one of the tests, the created test will be added above the create test form
*  3. When user finish to create the quiz it need to click on the "Save Quiz" button to save it
* */

export const CreateNewQuiz = () => {
    return (
        <Stack>
            <CodeInputFiledComponent />
        </Stack>
    );
};
