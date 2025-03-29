import { Box, BoxProps } from "@mui/material";

export const BoxUI = ({...props}: BoxProps) => {
  return (
    <Box {...props}>
      {props.children}
    </Box>
  );
};
