import { createSlice } from "@reduxjs/toolkit";

const todoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "Todo",
  initialState: [],
  reducers: {
    addTodo: (state, data) => {
      state.push({
        id: Date.now(),
        title: data.payload,
        compelete: false,
      });
    },
    deleteTodo: (state, data) => {
      return state.filter((todo) => todo.id !== data.payload);
    },
    editTodo: (state, data) => {
      const { id, title } = data.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) todo.title = title;
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
