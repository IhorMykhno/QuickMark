import PropTypes from "prop-types";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

export const RadioSelectGroup = ({ options }) => {
    return (
        <FormControl>
            <RadioGroup name="radio-buttons-group">
                { options.map(({ value, label }, index) => (
                    <FormControlLabel key={index} value={value} control={<Radio />} label={label} />
                )) }
            </RadioGroup>
        </FormControl>
    );
};

RadioSelectGroup.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
