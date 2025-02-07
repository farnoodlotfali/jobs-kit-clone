"use client";

import { Vazirmatn } from "next/font/google";
import { createTheme } from "@mui/material/styles";

import { BORDER_RADIUS } from "./jobs-kit/BorderRadius";
import { COLORS } from "./jobs-kit/Colors";
import { SPACING } from "./jobs-kit/Spacing";

const roboto = Vazirmatn({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["arabic"],
  display: "block",
});

const theme = createTheme({
  direction: "rtl",
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  colorSchemes: {
    light: {
      palette: {
        primary: COLORS.primary.light,
        secondary: COLORS.secondary.light,
        success: COLORS.success.light,
        warning: COLORS.warning.light,
        info: COLORS.info.light,
        error: COLORS.error.light,

        background: COLORS.background.light,
        text: COLORS.text.light,
        grey: COLORS.grey.light,
      },
    },
    dark: {
      palette: {
        primary: COLORS.primary.dark,
        secondary: COLORS.secondary.dark,
        success: COLORS.success.dark,
        warning: COLORS.warning.dark,
        info: COLORS.info.dark,
        error: COLORS.error.dark,
        background: COLORS.background.dark,
        text: COLORS.text.dark,
        grey: COLORS.grey.dark,
      },
    },
  },
  spacing: SPACING,
  shape: {
    borderRadius: BORDER_RADIUS,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: 48,
          fontWeight: 600,
          fontSize: 16,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingLeft: 6,
          borderRadius: theme.shape.borderRadius,
          minHeight: 30,
        }),
      },
    },
  },
});

export default theme;
