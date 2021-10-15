import { configureStore } from "@reduxjs/toolkit";
import { inputsSlice } from "../features/inputs/inputs.slice";

export const store = configureStore({
  reducer: {
    inputs: inputsSlice.reducer,
  },
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
