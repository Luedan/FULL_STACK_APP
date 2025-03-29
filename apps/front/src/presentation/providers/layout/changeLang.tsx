import { DarkMode, Language, LightMode } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "../theme/store";

export default function ChangeLangBtn() {
  const { setDarkMode, darkMode, setLng } = useThemeStore((state) => state);
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMode = () => setDarkMode(!darkMode);

  const handleClose = (lang: string) => {
    setLng(lang);
    localStorage.setItem("i18nextLng", lang);
    i18n.changeLanguage(lang);
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleMode}>
        {!darkMode ? (
          <DarkMode sx={{ color: "slateblue" }} />
        ) : (
          <LightMode color="warning" />
        )}
      </IconButton>
      <IconButton
        id="LangDDButton"
        aria-controls={open ? "UserDDMenu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Language sx={{ color: "primary.main" }} />
      </IconButton>
      <Menu
        id="UserDDMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "LangDDButton",
        }}
      >
        <MenuItem onClick={() => handleClose("es")}>{t("lang.es")}</MenuItem>
        <MenuItem onClick={() => handleClose("en")}>{t("lang.en")}</MenuItem>
      </Menu>
    </>
  );
}
