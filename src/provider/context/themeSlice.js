import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: false,

  reducers: {
    changeTheme: (curState) => {
      return !curState;
    },
  },
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
