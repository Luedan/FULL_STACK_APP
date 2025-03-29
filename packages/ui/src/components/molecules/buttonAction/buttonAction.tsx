import { useTheme } from "@mui/material";
import { ButtonUI } from "../../atoms/button/button";
import { TypographyUI } from "../../atoms/typography/typography";
import { ButtonActionProps, TActionToColor } from "./type";
import { Save, HighlightOff, Delete, Edit, Add } from "@mui/icons-material";

const actionToColor: TActionToColor = {
  save: "success",
  cancel: "warning",
  delete: "error",
  edit: "info",
  add: "primary",
};

const actionIcons = {
  save: Save,
  cancel: HighlightOff,
  delete: Delete,
  edit: Edit,
  add: Add,
};

export function ButtonActionUI(props: ButtonActionProps) {
  const { actionType, text, ...rest } = props;

  const theme = useTheme();

  const color = actionToColor[actionType];
  const Icon = actionIcons[actionType];

  return (
    <ButtonUI
      {...rest}
      color={color}
      sx={{
        textTransform: "inherit",
        [theme.breakpoints.down("sm")]: {
          "& .MuiButton-endIcon": {
            margin: "0px",
          },
        },
        ...rest.sx,
      }}
      endIcon={<Icon />}
    >
      <TypographyUI
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        {text}
      </TypographyUI>
    </ButtonUI>
  );
}
