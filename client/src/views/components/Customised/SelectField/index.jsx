import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const SelectField = ({
    label,
    id,
    items,
    handleChange,
    selectedItem,
}) => {
    return (
        <FormControl fullWidth size={"small"}>
            <InputLabel>{label}</InputLabel>
            <Select
                id={id}
                value={selectedItem}
                label={label}
                onChange={handleChange}
            >
                {items.map((item, index) => (
                    <MenuItem key={index} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

SelectField.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    items: PropTypes.array,
    handleChange: PropTypes.func,
    selectedItem: PropTypes.string,
};