import React, { ReactElement } from "react";
import { Card, Checkbox } from "@mui/material";
import { TypographyUI } from "../../atoms/typography/typography";
import { BoxUI } from "../../atoms/box/box";
import { ImageUI } from "../../atoms/img/img";

interface CustomCardProps {
  label: string;
  icon?: ReactElement;
  image?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
  pointer?: boolean;
  width?: string | number;
  height?: string | number;
  showCheckbox?: boolean;
  imageWidth?: string | number;
  imageHeight?: string | number;
}

export const CustomCard: React.FC<CustomCardProps> = ({
  label,
  icon,
  image,
  width = "100%",
  height,
  onClick,
  pointer,
  imageWidth,
  imageHeight,
  showCheckbox = true,
}) => {
  return (
    <Card
      onClick={onClick}
      elevation={1}
      sx={{
        ...(pointer ? { cursor: "pointer" } : {}),
        display: "flex",
        flexDirection: "column",
        width: width,
        height: height || "auto",
        border: "1px solid #9E9FA6",
        boxShadow: "none",
      }}
    >
      <BoxUI
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {icon &&
          React.cloneElement(icon, {
            sx: {
              marginRight: 2,
              width: "24px",
              height: "24px",
              margin: "20px 0px 0px 16px",
            },
          })}
        {image && (
          <ImageUI
            src={image}
            alt={label}
            style={{
              width: imageWidth || 200,
              height: imageHeight || 68,
              margin: "20px 0px 0px 16px",
            }}
            // style={{
            //   width: 200,
            //   height: 68,
            //   margin: "20px 0px 0px 16px",
            // }}
          />
        )}
        {showCheckbox && (
          <Checkbox
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: "25px",
              },
            }}
          />
        )}
      </BoxUI>
      <TypographyUI variant="body2" sx={{ margin: "15px 0px 0px 16px" }}>
        {label}
      </TypographyUI>
    </Card>
  );
};
