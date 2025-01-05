import PropTypes from "prop-types";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

export const MultiSelectField = ({ options }) => {
    return (
        <FormGroup>
            { options.map(({ label }, index) => (
                <FormControlLabel key={index} control={<Checkbox />} label={label} />
            )) }
        </FormGroup>
    );
};

MultiSelectField.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
