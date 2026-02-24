import { configureStore } from "@reduxjs/toolkit";
import { nonogramReducer } from "./nonogramSlice/nonogramSlice";
import { nonogramApiSlice } from "./nonogramSlice/nonogramApiSlice";

export const store = configureStore({
  reducer: {
    nonogram: nonogramReducer,
    [nonogramApiSlice.reducerPath]: nonogramApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(nonogramApiSlice.middleware),
});
