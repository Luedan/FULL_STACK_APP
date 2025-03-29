import { Card, CardContent, CardContentProps, CardProps } from "@mui/material";

export const CardUI = ({ ...props }: CardProps) => {
  return <Card {...props}>{props.children}</Card>;
};

export const CardContentUI = ({ ...props }: CardContentProps) => {
  return (
    <CardContent {...props}>
      {props.children}
    </CardContent>
  );
};
