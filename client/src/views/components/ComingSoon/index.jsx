import { Box, Divider, Typography, Stack } from "@mui/material";
import { images } from "@assets/index";

export const ComingSoonComponent = () => {
    return (
        <Box
            style={{
                backgroundImage: `url(${images.ComingSoon})`,
                backgroundSize: "cover",
                height: "91vh",
            }}
        >
            <Box
                width={"600px"}
                height={"80vh"}
                pl={"280px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
            >
                <Stack direction={"row"} alignItems={"center"}>
                    <Box pr={"10px"}>
                        <Divider sx={{ background: "black", width: "100px" }} />
                    </Box>
                    <Typography variant={"h6"}>Coming Soon</Typography>
                </Stack>
                <Typography variant={"h3"} sx={{ fontWeight: "bold" }}>
                    Now the functionality is under development.
                </Typography>
            </Box>
        </Box>
    );
};
