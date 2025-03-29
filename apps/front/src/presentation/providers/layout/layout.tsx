import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DrawerComponent } from "./drawer";
import { Aside } from "./aside";
import { Header } from "./header";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import clsx from "clsx";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const handleAsideToggle = () => {
    !isSmallScreen
      ? setIsMenuOpen(!isMenuOpen)
      : setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    if (isSmallScreen) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(true);
      setIsDrawerOpen(false);
    }
  }, [isSmallScreen]);

  return (
    <div className="w-[100dvw] h-[100dvh] flex">
      <DrawerComponent open={isDrawerOpen} openChange={handleAsideToggle} />
      <Aside isMenuOpen={isMenuOpen} />
      <motion.div
        className="w-full flex flex-col"
        animate={{ marginLeft: isMenuOpen ? 0 : "-350px" }}
        transition={{ duration: 0.3 }}
      >
        <Header handleAsideToggle={handleAsideToggle} />
        <div className="flex flex-1 p-2 bg-muted/40 justify-center overflow-y-scroll">
          <div
            className={clsx("w-[98%] h-full")}
          >
            <Outlet />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
