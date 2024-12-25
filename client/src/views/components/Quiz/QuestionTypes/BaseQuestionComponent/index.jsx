import PropTypes from "prop-types";
import { Stack, Typography } from "@mui/material";

export const BaseQuestionComponent = ({ number, condition, description }) => {
    return (
        <Stack spacing={2}>
            <Typography variant={"h5"}>Exercise {number}</Typography>
            <Stack>
                <Typography variant={"h6"}>{condition}</Typography>
                <Typography variant={"subtitle1"}>{description}</Typography>
            </Stack>
        </Stack>
    );
}

BaseQuestionComponent.propTypes = {
    number: PropTypes.number.isRequired,
    condition: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
