import { Drawer } from "@mui/material";
import { Menu } from "./menu";

export function DrawerComponent({
  open,
  openChange,
}: {
  open: boolean;
  openChange: () => void;
}) {
  return (
    <Drawer open={open} onClose={openChange}>
      <Menu />
    </Drawer>
  );
}
