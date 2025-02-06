"use client";

import { useState } from "react";
import { useColorScheme } from "@mui/material";

import { AppContext } from "./appContext";
import { THEME_MODE } from "@/constants/themeMode";

const AppState = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  // mode
  const { mode, setMode } = useColorScheme();

  // drawer
  const [showDrawer, setShowDrawer] = useState(true);

  const toggleDrawer = () => {
    setShowDrawer((prev) => !prev);
  };

  // toggle mode
  const toggleMode = () => {
    const newTheme = mode === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT;
    setMode(newTheme);
  };

  return (
    <AppContext.Provider
      value={{
        mode,
        toggleMode,
        showDrawer,
        toggleDrawer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
