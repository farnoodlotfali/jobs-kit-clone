import { createContext } from "react";

import { AppContextType } from "@/types/appContext";

export const AppContext = createContext<AppContextType | undefined>(undefined);
