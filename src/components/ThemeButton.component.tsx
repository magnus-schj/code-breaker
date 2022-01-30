import { IconButton } from "@mui/material";
import React, { FC, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";

interface Props {}

const ThemeButton: FC<Props> = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  const { darkMode, setDarkMode } = themeContext;

  const handleClick = () => {
    // saves theme preference in localstorage and changes current state
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
    setDarkMode(!darkMode);
  };

  return (
    <IconButton onClick={handleClick}>
      {darkMode ? <WbSunnyIcon /> : <Brightness2Icon />}
    </IconButton>
  );
};

export default ThemeButton;
