import { useState } from "react";
import { isEmpty, keys, values } from "lodash";
import { Box, Button, Stack, Typography } from "@mui/material";
import { CodeBlock } from "@network/codeBlock";
import { Languages } from "@constants/ProgrammingLanguages";
import { SelectField } from "@components/Customised/SelectField";
import { FormFieldsWrapper } from "@components/Wrappers/FormFiledWrapper";
import CodeEditor from "@uiw/react-textarea-code-editor";

//ToDo Need to remove or move to QuestionTypes folder
export const CodeInputFiledComponent = () => {
    const hardCodedVariable = {
        codeBlockLabel: "Please use code-block to answer the question",
        inputCodeRows: 4,
    };

    const [codeLanguage, setCodeLanguage] = useState({
        type: "",
        editorType: "",
    });
    const [inputCode, setInputCode] = useState("");
    const [output, setOutput] = useState({ status: "", message: "" });

    const isRunCodeDisabled = () =>
        isEmpty(codeLanguage.type) ||
        isEmpty(codeLanguage.editorType) ||
        isEmpty(inputCode);

    const handleRunCode = async () => {
        try {
            const { data } = await CodeBlock.RunCode({
                codeLanguage: codeLanguage.type,
                code: inputCode,
            });
            setOutput({ status: keys(data).toString(), message: values(data) });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeInput = ({ target }) => setInputCode(target.value);

    const getEditorType = (type) => type.split(".")[1];

    const renderCodeEditor = () => {
        return (
            <Box minHeight={200}>
                <CodeEditor
                    minHeight={200}
                    value={inputCode}
                    data-color-mode="dark"
                    language={codeLanguage.editorType}
                    placeholder="Please enter your code here."
                    onChange={handleChangeInput}
                    padding={25}
                    style={{
                        fontSize: 14,
                        fontFamily:
                            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                    }}
                />
            </Box>
        );
    };

    const renderCodeOutput = () => {
        return (
            <Box minHeight={100}>
                <CodeEditor
                    disabled
                    minHeight={100}
                    value={output.message}
                    data-color-mode="dark"
                    padding={25}
                    style={{
                        color:
                            output.status === "error" ? "#DC143C" : "#FFFFFF",
                        fontSize: 14,
                        fontFamily:
                            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                    }}
                />
            </Box>
        );
    };

    return (
        <FormFieldsWrapper>
            <Stack spacing={2}>
                <Typography variant={"h6"}>
                    {hardCodedVariable.codeBlockLabel}
                </Typography>
                <Stack direction={"row"} spacing={2}>
                    <Button
                        variant={"contained"}
                        size={"small"}
                        disabled={isRunCodeDisabled()}
                        onClick={handleRunCode}
                    >
                        Run Code
                    </Button>
                    <Box width={"200px"}>
                        <SelectField
                            id="code-language"
                            items={Languages}
                            label="Code Language"
                            selectedItem={codeLanguage.type}
                            handleChange={(e) => {
                                const type = e.target.value;

                                setCodeLanguage({
                                    type,
                                    editorType: getEditorType(type),
                                });
                            }}
                        />
                    </Box>
                </Stack>
                <Stack spacing={2}>
                    {renderCodeEditor()}
                    <Stack spacing={1}>
                        <Typography>Output:</Typography>
                        {renderCodeOutput()}
                    </Stack>
                </Stack>
            </Stack>
        </FormFieldsWrapper>
    );
};
