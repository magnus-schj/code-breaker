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
    swapColours(state, { payload }) {
      console.log("object");
      const {
        source: [sourceKey, sourceHsl],
        dest: [destKey, destHsl],
      } = payload;
      state[sourceKey].hsl = destHsl;
      state[destKey].hsl = sourceHsl;
    },
  },
});

export const { addColour, removeColour, swapColours } = inputsSlice.actions;
