import PropTypes from "prop-types";
import CodeEditor from "@uiw/react-textarea-code-editor";

export const CodeEditorField = ({value, language, placeholder, onChange, ...props }) => {
    return (
        <CodeEditor
            minHeight={200}
            value={value}
            data-color-mode="dark"
            language={language}
            placeholder={placeholder}
            onChange={onChange}
            padding={25}
            style={{
                fontSize: 14,
                fontFamily:
                    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
            {...props}
        />
    );
}

CodeEditorField.propTypes = {
    value: PropTypes.string,
    language: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
