"use client";

import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import { IconButton } from "@mui/material";

import { THEME_MODE } from "@/constants/themeMode";
import { useAppContext } from "@/hooks/useAppContext";

const ModeSwitch = () => {
  const { mode, toggleMode } = useAppContext();
  if (!mode) {
    return null;
  }
  return (
    <IconButton onClick={toggleMode}>
      {mode === THEME_MODE.LIGHT ? <DarkModeTwoToneIcon /> : <LightModeTwoToneIcon />}
    </IconButton>
  );
};

export default ModeSwitch;
