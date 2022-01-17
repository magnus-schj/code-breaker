import { useTheme } from "@mui/material";
import { Switch } from "@mui/material";
import { styled } from "@mui/styles";
import React, { FC, useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";

interface Props {}

const ThemeSwitch: FC<Props> = () => {
  const themeContext = useContext(ThemeContext);

  const { darkMode, setDarkMode } = themeContext;

  return (
    <Switch
      sx={{
        "& .MuiSwitch-switchBase": {
          "&.Mui-checked": {
            background: "red",
          },
        },
      }}
    />
  );
};

export default ThemeSwitch;
