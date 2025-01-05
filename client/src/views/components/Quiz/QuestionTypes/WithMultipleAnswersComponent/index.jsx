import PropTypes from "prop-types";
import { Stack } from "@mui/material";
import { FormFieldsWrapper } from "@components/Wrappers/FormFiledWrapper";
import { BaseQuestionComponent } from "@components/Quiz/QuestionTypes/BaseQuestionComponent";
import { MultiSelectField } from "@components/Customised/MultiSelectField";

export const WithMultipleAnswersComponent = ({ options, ...props }) => {
    return (
        <FormFieldsWrapper>
            <Stack spacing={1}>
                <BaseQuestionComponent {...props} />
                <MultiSelectField options={options} />
            </Stack>
        </FormFieldsWrapper>
    );
};

WithMultipleAnswersComponent.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
