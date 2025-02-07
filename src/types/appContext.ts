import { Dispatch, SetStateAction } from "react";

import { IUser } from "./schema/user";
import { UThemeMode } from "./themeMode";

export type AppContextType = {
  mode: UThemeMode;
  toggleMode: () => void;
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  showDrawer: boolean;
  toggleDrawer: () => void;
  logoutUser: () => void;
};
