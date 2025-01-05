import PropTypes from "prop-types";
import { Stack } from "@mui/material";
import { FormFieldsWrapper } from "@components/Wrappers/FormFiledWrapper/index.jsx";
import { BaseQuestionComponent } from "@components/Quiz/QuestionTypes/BaseQuestionComponent/index.jsx";
import { InputField } from "@components/Customised/InputField/index.jsx";

export const WithOpenAnswerComponent = ({label, ...props}) => {
    return (
        <FormFieldsWrapper>
            <Stack spacing={1}>
                <BaseQuestionComponent {...props} />
                <InputField label={label} />
            </Stack>
        </FormFieldsWrapper>
    );
};

WithOpenAnswerComponent.propTypes = {
    label: PropTypes.string.isRequired,
};
