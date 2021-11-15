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
      console.log(`payload`, payload);
      const {
        source: [sourceKey, source],
        dest: [destKey, dest],
      } = payload;
      state[sourceKey].hsl = dest.hsl;
      state[sourceKey].name = dest.name;

      state[destKey].hsl = source.hsl;
      state[destKey].name = source.name;
    },
  },
});

export const { addColour, removeColour, swapColours } = inputsSlice.actions;
