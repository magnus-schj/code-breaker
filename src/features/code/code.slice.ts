import { createSlice } from "@reduxjs/toolkit";
import { Attempt, CodeSlice, ColoursType } from "../../interfaces";

const initialState: CodeSlice = {
  code: null,
  codeBroken: false,
  numTries: 0,
  attempts: [],
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
    addAttempt(state, { payload }) {
      state.attempts.push(payload);
    },
  },
});

export const { makeCode, setCodeBroken, incrementTries, addAttempt } =
  codeSlice.actions;
