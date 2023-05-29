import { useState } from "react";
import { isEmpty } from "lodash";
import { CustomSelector } from "@components/CustomSelector";
import { FormFieldsWrapper } from "@components/Wrappers/FormFiledWrapper";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { CodeBlock } from "@network/codeBlock";
import { Languages } from "@constants/ProgrammingLanguages";

export const CodeInputFiledComponent = () => {
    const hardCodedVariable = {
        exerciseLabel: "Please use code-block to answer the question",
        codeBlockRows: 4,
    };

    const [codeLanguage, setCodeLanguage] = useState("");
    const [inputCode, setInputCode] = useState("");

    const isRunCodeDisabled = () => isEmpty(codeLanguage) || isEmpty(inputCode);

    const handleRunCode = async () => {
        try {
            const res = await CodeBlock.RunCode({
                codeLanguage,
                code: inputCode,
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeInput = ({ target }) => setInputCode(target.value);

    return (
        <FormFieldsWrapper>
            <Stack spacing={2}>
                <Typography variant={"h6"}>
                    {hardCodedVariable.exerciseLabel}
                </Typography>
                <Stack spacing={2}>
                    <TextField
                        defaultValue={inputCode}
                        multiline
                        rows={hardCodedVariable.codeBlockRows}
                        onChange={handleChangeInput}
                    />
                    <Stack direction={"row"} spacing={2}>
                        <Button
                            variant={"contained"}
                            size={"small"}
                            disabled={isRunCodeDisabled()}
                            onClick={handleRunCode}
                        >
                            Run Code
                        </Button>
                        <Button
                            variant={"contained"}
                            size={"small"}
                            disabled={true}
                            onClick={handleRunCode}
                        >
                            Compile Code
                        </Button>
                        <Box width={"200px"}>
                            <CustomSelector
                                id="code-language"
                                items={Languages}
                                label="Code Language"
                                selectedItem={codeLanguage}
                                handleChange={(e) =>
                                    setCodeLanguage(e.target.value)
                                }
                            />
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </FormFieldsWrapper>
    );
};
