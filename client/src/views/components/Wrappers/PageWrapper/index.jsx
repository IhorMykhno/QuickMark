import PropTypes from "prop-types";
import { Box } from "@mui/material";

export const PageWrapper = ({ children }) => {
    return (
        <Box px={"120px"} pt={"40px"}>
            {children}
        </Box>
    );
};

PageWrapper.propTypes = {
    children: PropTypes.element,
};
