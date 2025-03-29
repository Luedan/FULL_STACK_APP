import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStoreType = {
  lng: string;
  setLng: (lng: string) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

export const useThemeStore = create<ThemeStoreType>()(
  persist(
    (set, get) => ({
      lng: "es",
      setLng: (lng: string) => {
        const val = get().lng !== lng
        set({ lng });
        if (val) window.location.reload();
      },
      darkMode: false,
      setDarkMode: (darkMode: boolean) => set({ darkMode }),
    }),
    { name: "theme" },
  ),
);
