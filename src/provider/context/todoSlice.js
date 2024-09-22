import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    allTodos: [],
    onEdit: { todo: {}, isEditing: false },
    checkedId: [],
  },

  reducers: {
    add: (curState, action) => {
      return {
        ...curState,
        allTodos: [...curState.allTodos, action.payload],
      };
    },

    remove: (curState, action) => {
      if (curState.onEdit.todo._id === action.payload) {
        return {
          ...curState,
          allTodos: curState.allTodos.filter(
            (item) => item._id !== action.payload
          ),
          onEdit: {
            todo: {},
            isEditing: false,
          },
        };
      } else {
        return {
          ...curState,
          allTodos: curState.allTodos.filter(
            (item) => item._id !== action.payload
          ),
        };
      }
    },

    edit: (curState, action) => {
      return {
        ...curState,
        onEdit: { todo: action.payload, isEditing: true },
      };
    },

    update: (curState, action) => {
      return {
        ...curState,
        allTodos: curState.allTodos.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
        onEdit: { todo: {}, isEditing: false },
      };
    },

    check: (curState, action) => {
      return {
        ...curState,
        checkedId: [...curState.checkedId, action.payload],
      };
    },
    uncheck: (curState, action) => {
      return {
        ...curState,
        checkedId: curState.checkedId.filter((item) => item !== action.payload),
      };
    },

    clear: (curState) => {
      return {
        ...curState,
        allTodos: curState.allTodos.filter(
          (item) => !curState.checkedId.includes(item._id)
        ),
        checkedId: [],
      };
    },
  },
});

export default todoSlice.reducer;
export const { add, remove, edit, update, check, uncheck, clear } =
  todoSlice.actions;
