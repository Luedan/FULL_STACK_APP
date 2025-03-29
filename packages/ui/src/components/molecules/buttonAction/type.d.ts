import { ButtonProps } from "@mui/material";

export type TActionButton = "save" | "cancel" | "delete" | "edit" | "add";

export type TActionToColor = {
  [string in TActionButton]: "success" | "warning" | "error" | "info" | "primary";
};

export type ButtonActionProps = {
  actionType: TActionButton;
  text: string;
} & ButtonProps;
