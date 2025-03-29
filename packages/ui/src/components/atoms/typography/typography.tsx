import { Typography, TypographyProps } from "@mui/material";

export const TypographyUI = (props: TypographyProps) => {
  return <Typography  {...props}>{props.children}</Typography>
}
