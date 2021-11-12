import { createSlice } from "@reduxjs/toolkit";
import { inputsData } from "../../initialData";

export const inputsSlice = createSlice({
  name: "colours",
  initialState: inputsData,
  reducers: {
    addColour(state, { payload }) {
      state[payload.id].hsl = payload.hsl;
    },
    removeColour(state, { payload }) {
      state[payload].hsl = null;
    },
  },
});

export const { addColour, removeColour } = inputsSlice.actions;
