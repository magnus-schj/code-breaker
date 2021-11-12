import { createSlice } from "@reduxjs/toolkit";
import { inputsData } from "../../initialData";

export const inputsSlice = createSlice({
  name: "colours",
  initialState: inputsData,
  reducers: {
    // addColour(state, { payload }) {
    //   state[payload.id] = payload;
    // },
    // removeColour(state, { payload }) {
    //   state[payload].peg = [];
    // },
  },
});

export const {} = inputsSlice.actions;
