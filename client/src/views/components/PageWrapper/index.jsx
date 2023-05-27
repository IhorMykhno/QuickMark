import { Box } from "@mui/material";

export const PageWrapper = ({ children }) => {
  return(
    <Box px={'120px'} pt={'20px'}>
        {children}
    </Box>
  );
};
