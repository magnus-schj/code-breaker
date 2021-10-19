import { createSlice } from "@reduxjs/toolkit";
import { ColoursType } from "../../interfaces";

interface Code {
  code: null | ColoursType;
  codeBroken: boolean;
}

const initialState = {
  code: null,
  codeBroken: false,
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
  },
});

export const { makeCode, setCodeBroken } = codeSlice.actions;
