import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./App/store";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./themes";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
