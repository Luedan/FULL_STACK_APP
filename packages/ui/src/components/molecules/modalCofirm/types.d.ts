import { SxProps } from "@mui/material";

export type TModalAlert = {
  state: boolean;
  title: string;
  subTitle?: string;
  subTitleLong?: string;
  paragraph?: string;
  onClickAccept?: () => void;
  onClickDecline?: () => void;
  nameAccept: string;
  nameDecline?: string;
  icon?: React.ReactNode;
  handleCloseModal: (state: boolean) => void;
  disabledLoading?: boolean;
  disabled?: boolean;
  declineAction?: boolean;
};

export type TStyle = {
  [key: string]: SxProps;
};
