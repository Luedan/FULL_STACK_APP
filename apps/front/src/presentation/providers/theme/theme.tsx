import { createTheme } from "@mui/material";
import { Localization } from "@mui/material/locale";

export const AppTheme = (lang: Localization, darkMode: boolean) =>
  createTheme(
    {
      palette: {
        mode: darkMode ? "dark" : "light",
      },
      typography: {
        fontFamily: "Poppins, sans-serif",
      },
      components: {},
    },
    lang
  );
