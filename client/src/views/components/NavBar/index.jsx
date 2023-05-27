import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Divider, Stack, Tab, Tabs, Typography } from "@mui/material";

export const NavBar = () => {
    const [menuTub, setMenuTub] = useState(0);
    const navigate = useNavigate();

    const onChange = (e, tub) => {
        setMenuTub(tub);
    };

    return (
        <>
            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                px={"30px"}
                py={"10px"}
            >
                <Stack direction={"row"} alignItems={"center"}>
                    <Typography variant="h4" pr={"20px"}>
                        QM
                    </Typography>
                    <Tabs value={menuTub} onChange={onChange}>
                        <Tab label="Statistics" onClick={() => navigate("/")} />
                        <Tab label="Tests" onClick={() => navigate("/tests")} />
                        <Tab
                            label="Create test"
                            onClick={() => navigate("/create-test")}
                        />
                    </Tabs>
                </Stack>
                <Avatar>IM</Avatar>
            </Stack>
            <Divider />
        </>
    );
};
