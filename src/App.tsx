import { useEffect, useState } from "react";
import "./App.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import Root from "./components/Root.component";
import { lightTheme, darkTheme } from "./themes";
import { ThemeContext } from "./ThemeContext";

function App() {
  // gets variable stored locally, decides on light or dark mode
  const storedTheme = localStorage.getItem("theme");
  const initialState = !storedTheme || storedTheme === "light" ? false : true;
  // state
  const [darkMode, setDarkMode] = useState(initialState);
  const stateObject = { darkMode, setDarkMode };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={stateObject}>
        <CssBaseline />
        <Root />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
