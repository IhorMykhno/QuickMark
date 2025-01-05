import PropTypes from "prop-types";
import { TextField } from "@mui/material";

export const InputField = ({ label }) => {
    return (
        <TextField label={label} variant="outlined" size={'small'} />
    );
};

InputField.propTypes = {
    label: PropTypes.string.isRequired
};
