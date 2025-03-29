import { Button, ButtonProps } from "@mui/material";

export const ButtonUI = ({ ...props }: ButtonProps) => {
  return (
    <Button
      fullWidth
      {...props}
      sx={{
        ...props.sx,
        textTransform: "capitalize",
      }}
    >
      {props.children}
    </Button>
  );
};
