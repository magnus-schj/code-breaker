import { createSlice } from "@reduxjs/toolkit";
import { inputsData } from "../../initialData";

export const inputsSlice = createSlice({
  name: "colours",
  initialState: inputsData,
  reducers: {
    addColour(state, { payload }) {
      const { id, hsl, name } = payload;
      state[id].hsl = hsl;
      state[id].name = name;
    },
    removeColour(state, { payload }) {
      state[payload].hsl = null;
    },
    swapColours(state, { payload }) {
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
