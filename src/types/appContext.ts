import { UThemeMode } from "./themeMode";

export type AppContextType = {
  mode: UThemeMode;
  toggleMode: () => void;
  showDrawer: boolean;
  toggleDrawer: () => void;
};
