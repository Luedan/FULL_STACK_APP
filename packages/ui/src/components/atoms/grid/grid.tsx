import { Grid, GridProps } from "@mui/material";

export const GridUI = (props: GridProps) => {
  return (
    <Grid  {...props}>
      {props.children}
    </Grid>
  );
};
