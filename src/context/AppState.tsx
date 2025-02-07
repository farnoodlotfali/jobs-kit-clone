"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useColorScheme } from "@mui/material";

import { AppContext } from "./appContext";
import { USER, USER_TOKEN } from "@/constants/storage";
import { THEME_MODE } from "@/constants/themeMode";
import { IUser } from "@/types/schema/user";

const AppState = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const queryClient = useQueryClient();

  // mode
  const { mode, setMode } = useColorScheme();

  // user
  const [user, setUser] = useState<IUser | null>(() => {
    const storedUser = Cookies.get(USER);
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // drawer
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer((prev) => !prev);
  };

  // toggle mode
  const toggleMode = () => {
    const newTheme = mode === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT;
    setMode(newTheme);
  };

  // logout
  const logoutUser = () => {
    Cookies.remove(USER_TOKEN);
    Cookies.remove(USER);

    setUser(null);

    queryClient.clear();
  };

  return (
    <AppContext.Provider
      value={{
        mode,
        toggleMode,
        user,
        setUser,
        showDrawer,
        toggleDrawer,
        logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
