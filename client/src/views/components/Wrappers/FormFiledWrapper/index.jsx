import PropTypes from "prop-types";
import { Box } from "@mui/material";

export const FormFieldsWrapper = ({ children }) => {
    return (
        <Box
            p={"40px"}
            sx={{
                border: "2px solid #E5E4E2",
                borderRadius: "20px",
                boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
        >
            {children}
        </Box>
    );
};

FormFieldsWrapper.propTypes = {
    children: PropTypes.element,
};
