import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppTheme } from "./theme";
import { useThemeStore } from "./store";
import { enUS, esES } from "@mui/material/locale";

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const lng = useThemeStore((state) => state.lng) || "es";
  const darkMode = useThemeStore((state) => state.darkMode) || false;

  return (
    <ThemeProvider theme={AppTheme(lng === "es" ? esES : enUS, darkMode)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
