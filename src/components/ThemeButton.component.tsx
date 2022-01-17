import { IconButton, useTheme } from "@mui/material";
import { Switch } from "@mui/material";
import { styled } from "@mui/styles";
import React, { FC, useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";

interface Props {}

const ThemeButton: FC<Props> = () => {
  const themeContext = useContext(ThemeContext);

  const { darkMode, setDarkMode } = themeContext;

  return (
    <IconButton onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <Brightness2Icon /> : <WbSunnyIcon />}
    </IconButton>
  );
};

export default ThemeButton;
