import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ChangeLangBtn from "./changeLang";

export function Header({
  handleAsideToggle,
}: {
  handleAsideToggle: () => void;
}) {
  return (
    <div className="h-[3rem] border-b px-4 py-2 flex items-center justify-between">
      <IconButton onClick={handleAsideToggle}>
        <Menu sx={{ color: "primary.main" }} />
      </IconButton>
      <div className="flex items-center">
        <ChangeLangBtn />
      </div>
    </div>
  );
}
