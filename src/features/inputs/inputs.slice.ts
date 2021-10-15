import { createSlice } from "@reduxjs/toolkit";
import { pegInputsData } from "../../initialData";

export const inputsSlice = createSlice({
  name: "colours",
  initialState: pegInputsData,
  reducers: {
    addColour(state, { payload }) {
      state[payload.id] = payload;
    },
    removeColour(state, { payload }) {
      state[payload].peg = [];
    },
  },
});

export const { addColour, removeColour } = inputsSlice.actions;
