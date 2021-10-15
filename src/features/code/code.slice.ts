import { createSlice } from "@reduxjs/toolkit";

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
    win(state) {
      state.codeBroken = true;
    },
  },
});
