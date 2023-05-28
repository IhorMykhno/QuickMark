import { Box, Button } from "@mui/material";
import { Answer } from "@network/answer";

export const CreateTestPage = () => {
    const sendRequest = async () => {
        try {
            const res = await Answer.TestRequest();
            console.log(res);
        } catch (e) {
            console.log("error", e);
        }
    };

    return (
        <Box p={"40px"}>
            <Button variant="contained" onClick={sendRequest}>
                Test Request
            </Button>
        </Box>
    );
};
