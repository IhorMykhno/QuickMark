import { useState } from "react";
import { isEmpty } from "lodash";
import { Button, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { BaseQuestionComponent } from "@components/Quiz/QuestionTypes/BaseQuestionComponent/index.jsx";
import { FormFieldsWrapper } from "@components/Wrappers/FormFiledWrapper/index.jsx";
import { CodeEditorField } from "@components/Customised/CodeEditorField/index.jsx";

export const WithRunCodeComponent = ({ inputCode= '', language, placeholder, disabled, ...props}) => {
    const [value, setValue] = useState(inputCode);

    const onChange = ({ target }) => target && setValue(target.value);

    // ToDo: Add run code logic
    const onRunCode = () => {
        console.log('RunCode')
    };

    return (
        <FormFieldsWrapper>
           <Stack spacing={1}>
               <BaseQuestionComponent {...props} />
               <CodeEditorField
                   value={value}
                   language={language}
                   placeholder={placeholder}
                   onChange={onChange}
                   disabled={disabled}
               />
              <Stack spacing={2} direction={'row'}>
                  <Button
                      variant={"contained"}
                      disabled={isEmpty(value)}
                      onClick={onRunCode}
                  >
                      Run Code
                  </Button>
                  {
                      !isEmpty(inputCode) &&
                      <Button
                          variant={"outlined"}
                          onClick={() => setValue(inputCode)}
                      >
                          Refresh
                      </Button>
                  }
                  {/*ToDo: Add message success or error when button clicked */}
              </Stack>
           </Stack>
        </FormFieldsWrapper>
    );
}

WithRunCodeComponent.propTypes = {
    inputCode: PropTypes.string,
    language: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
};
