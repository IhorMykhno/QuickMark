import PropTypes from "prop-types";
import { TextField } from "@mui/material";

export const InputField = ({ label, ...props }) => {
    return (
        <TextField label={label} variant="outlined" size={'small'} {...props} />
    );
};

InputField.propTypes = {
    label: PropTypes.string,
};
