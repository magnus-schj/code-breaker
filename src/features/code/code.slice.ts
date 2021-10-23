import { createSlice } from "@reduxjs/toolkit";
import { ColoursType } from "../../interfaces";

interface Code {
  code: null | ColoursType;
  codeBroken: boolean;
  numTries: number;
}

const initialState = {
  code: null,
  codeBroken: false,
  numTries: 0,
};

export const codeSlice = createSlice({
  name: "code",
  initialState: initialState,
  reducers: {
    makeCode(state, { payload }) {
      state.code = payload;
    },
    setCodeBroken(state, { payload }) {
      state.codeBroken = payload;
    },
    incrementTries(state) {
      state.numTries++;
    },
  },
});

export const { makeCode, setCodeBroken, incrementTries } = codeSlice.actions;
