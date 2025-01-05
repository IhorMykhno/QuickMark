import PropTypes from "prop-types";
import { Stack } from "@mui/material";
import { BaseQuestionComponent } from "@components/Quiz/QuestionTypes/BaseQuestionComponent";
import { FormFieldsWrapper } from "@components/Wrappers/FormFiledWrapper";
import { RadioSelectGroup } from "@components/Customised/RadioSelectGroup";

export const WithOneRightAnswerComponent = ({ options, ...props}) => {
    return (
        <FormFieldsWrapper>
            <Stack>
                <BaseQuestionComponent {...props} />
                <RadioSelectGroup options={options} />
            </Stack>
        </FormFieldsWrapper>
    );
};

WithOneRightAnswerComponent.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
