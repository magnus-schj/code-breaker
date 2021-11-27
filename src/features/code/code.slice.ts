import { createSlice } from "@reduxjs/toolkit";
import { CodeSlice } from "../../interfaces";

const initialState: CodeSlice = {
  code: null,
  codeBroken: false,
  numTries: 0,
  attempts: [],
  limit: 16,
};

export const codeSlice = createSlice({
  name: "code",
  initialState: initialState,
  reducers: {
    setCode(state, { payload }) {
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
    resetCode(state) {
      state.code = initialState.code;
      state.codeBroken = initialState.codeBroken;
      state.numTries = initialState.numTries;
      state.attempts = initialState.attempts;
      state.limit = initialState.limit;
    },
  },
});

export const { setCode, setCodeBroken, incrementTries, addAttempt, resetCode } =
  codeSlice.actions;
