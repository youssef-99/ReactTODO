import { configureStore } from "@reduxjs/toolkit";
import { cakeSlice } from "./features/bakery/state";
import { todoSlice } from "./features/todo/state";

export const appStore = configureStore({
  reducer: {
    cake: cakeSlice.reducer,
    todos: todoSlice.reducer,
  },
});
