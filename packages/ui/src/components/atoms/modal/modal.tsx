import { Modal, ModalProps } from "@mui/material";
import { BoxUI } from "../box/box";

interface ModalUIProps extends ModalProps {
  variant?: "sm" | "md" | "lg" | "xl";
  width?: string | number;
  height?: string | number;
  bgcolor?: string;
}

export const ModalUI = ({
  height = "auto",
  bgcolor = "#fff",
  width,
  ...props
}: ModalUIProps) => {
  return (
    <Modal {...props}>
      <BoxUI
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "90%",
            sm: "80%",
            md: "70%",
            lg: "40%",
            xl: width || "41%",
          },
          height,
          bgcolor,
          borderRadius: "5px",
        }}
      >
        {props.children}
      </BoxUI>
    </Modal>
  );
};
