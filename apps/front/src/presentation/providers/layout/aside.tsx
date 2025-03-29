import { motion } from "framer-motion";
import { AsideHeader } from "./asideHeader";
import { Menu } from "./menu";

export function Aside({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <motion.div
      initial={{ x: "-350px" }}
      animate={{ x: isMenuOpen ? 0 : "-350px" }}
      transition={{ duration: 0.3 }}
      className="hidden md:flex flex-col w-[350px] border-r"
    >
      <AsideHeader />
      <div className="h-[calc(100%-3rem)] p-1">
        <Menu />
      </div>
    </motion.div>
  );
}
