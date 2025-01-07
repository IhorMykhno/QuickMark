import { Stack } from "@mui/material";
import { FormFieldsWrapper } from "@components/Wrappers/FormFiledWrapper/index.jsx";
import { BaseQuestionComponent } from "@components/Quiz/QuestionTypes/BaseQuestionComponent/index.jsx";
import { InputField } from "@components/Customised/InputField/index.jsx";

export const WithOpenAnswerComponent = ({...props}) => {
    const description = "";
    const label = 'Вкажіть відповідь на запитання тут'

    return (
        <FormFieldsWrapper>
            <Stack spacing={1}>
                <BaseQuestionComponent description={description}  {...props} />
                <InputField label={label} />
            </Stack>
        </FormFieldsWrapper>
    );
};
