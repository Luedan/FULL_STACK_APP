import React, { useCallback, useState, useEffect } from "react";
import Fade from "@mui/material/Fade";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { ModalUI } from "../../atoms/modal/modal";
import { BoxUI } from "../../atoms/box/box";
import { TypographyUI } from "../../atoms/typography/typography";
import { ButtonUI } from "../../atoms/button/button";
import { TModalAlert } from "./types.d";

export const TransitionsModalAlert: React.FC<TModalAlert> = ({
  state = false,
  title,
  subTitle,
  subTitleLong,
  paragraph,
  onClickAccept,
  onClickDecline,
  nameAccept,
  nameDecline,
  icon,
  handleCloseModal,
  disabledLoading,
  disabled,
  declineAction,
}) => {
  const [open, setOpen] = useState(state);

  const hide = useCallback(() => {
    setOpen(!state);
    handleCloseModal(false);
  }, [state]);

  useEffect(() => {
    setOpen(state);
  }, [state]);

  return (
    <ModalUI
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      closeAfterTransition
      height={"auto"}
      bgcolor="none"
    >
      <Fade in={open}>
        <BoxUI
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon || (
            <WarningAmberIcon
              sx={{
                fontSize: "60px",
                color: "secondary.main",
                marginTop: "60px",
              }}
            />
          )}
          <TypographyUI
            sx={{
              fontWeight: "400",
              LineHeight: "31.5px",
              color: "secondary.main",
              marginTop: "20px",
              fontSize: {
                xs: "18px",
                sm: "24px",
              },
            }}
          >
            {title}
          </TypographyUI>
          {subTitle && (
            <TypographyUI variant="subtitle1">{subTitle}</TypographyUI>
          )}
          {subTitleLong && (
            <TypographyUI variant="body1">{subTitleLong}</TypographyUI>
          )}
          {paragraph && (
            <TypographyUI
              sx={{
                marginTop: "25px",
                fontSize: {
                  xs: "15px",
                  sm: "17px",
                },
              }}
            >
              {paragraph}
            </TypographyUI>
          )}
          <BoxUI
            sx={{
              margin: "35px 0px",
              gap: "20px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <ButtonUI
              onClick={onClickAccept}
              disabled={disabledLoading}
              sx={{
                backgroundColor: "primary.main",
                width: "40%",
                height: "45px",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "primary.dark",
                },
              }}
            >
              {nameAccept}
            </ButtonUI>
            {nameDecline && (
              <ButtonUI
                onClick={declineAction ? onClickDecline : hide}
                disabled={disabled}
                sx={{
                  backgroundColor: "text.disabled",
                  width: "40%",
                  height: "45px",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "text.secondary",
                  },
                }}
              >
                {nameDecline}
              </ButtonUI>
            )}
          </BoxUI>
        </BoxUI>
      </Fade>
    </ModalUI>
  );
};
