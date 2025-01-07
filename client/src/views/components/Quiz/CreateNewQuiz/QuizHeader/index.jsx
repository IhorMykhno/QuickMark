import { InputField } from "@components/Customised/InputField/index.jsx";

export const QuizHeader = ({ header, onChange }) => {
    return (
        <InputField
            placeholder="Назва тесту"
            fullWidth
            value={header}
            onChange={onChange}
            size={'medium'}
            variant="standard"
            sx={{
                '& .MuiInputBase-input': {
                    fontSize: '2.125rem',
                },
            }}
        />
    );
}
