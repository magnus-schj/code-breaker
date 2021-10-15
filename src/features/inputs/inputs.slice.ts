import { createSlice } from "@reduxjs/toolkit";
import { pegInputsData } from "../../initialData";

export const inputsSlice = createSlice({
  name: "colours",
  initialState: pegInputsData,
  reducers: {
    addColour(state, { payload }) {
      console.log("payload:", payload);
      // state = { ...state, [payload.id]: { payload } };
      state[payload.id] = payload;
    },
  },
});

export const { addColour } = inputsSlice.actions;
