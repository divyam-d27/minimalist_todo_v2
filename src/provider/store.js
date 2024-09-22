import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./context/todoSlice";
import themeReducer from "./context/themeSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themeReducer,
  },
});

export default store;
