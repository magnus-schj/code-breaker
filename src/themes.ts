import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      light: "#e3f2fd",
      dark: "#42a5f5",
    },
    background: {
      default: "#fff",
      paper: "#efefef",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#517491",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    background: {
      default: "#121212",
      paper: "rgba(255, 255, 255, 0.4)",
    },
  },
});
