import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./App/store";
import { ThemeProvider } from "@mui/styles";
import { theme } from "./themes";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
