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

  return (
    <IconButton onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <Brightness2Icon /> : <WbSunnyIcon />}
    </IconButton>
  );
};

export default ThemeButton;
