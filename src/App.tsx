import { createContext, SetStateAction, useState } from "react";
import "./App.css";
import { Typography, Button, useMediaQuery, CssBaseline } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/styles";
import Root from "./components/Root.component";
import { theme } from "./themes";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const stateObject = { darkMode, setDarkMode };
  console.log("darkMode:", darkMode);

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={stateObject}>
        <CssBaseline />
        <Root />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
