import { useState } from "react";
import { isEmpty, keys, values } from "lodash";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { CodeBlock } from "@network/codeBlock";
import { Languages } from "@constants/ProgrammingLanguages";
import { CustomSelector } from "@components/CustomSelector";
import { FormFieldsWrapper } from "@components/Wrappers/FormFiledWrapper";

export const CodeInputFiledComponent = () => {
    const hardCodedVariable = {
        codeBlockLabel: "Please use code-block to answer the question",
        inputCodeRows: 4,
    };

    const [codeLanguage, setCodeLanguage] = useState("");
    const [inputCode, setInputCode] = useState("");
    const [output, setOutput] = useState({ status: "", message: "" });

    const isRunCodeDisabled = () => isEmpty(codeLanguage) || isEmpty(inputCode);

    const handleRunCode = async () => {
        try {
            const { data } = await CodeBlock.RunCode({
                codeLanguage,
                code: inputCode,
            });
            setOutput({ status: keys(data).toString(), message: values(data) });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeInput = ({ target }) => setInputCode(target.value);

    return (
        <FormFieldsWrapper>
            <Stack spacing={2}>
                <Typography variant={"h6"}>
                    {hardCodedVariable.codeBlockLabel}
                </Typography>
                <Stack spacing={2}>
                    <TextField
                        defaultValue={inputCode}
                        multiline
                        rows={hardCodedVariable.inputCodeRows}
                        onChange={handleChangeInput}
                    />
                    <Stack>
                        <Typography>Output:</Typography>
                        <TextField
                            defaultValue={output.message}
                            multiline
                            disabled
                            sx={{
                                "& .MuiInputBase-input.Mui-disabled": {
                                    WebkitTextFillColor:
                                        output.status === "error"
                                            ? "#DC143C"
                                            : "#008000",
                                },
                            }}
                        />
                    </Stack>
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
