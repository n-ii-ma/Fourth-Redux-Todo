import { createSlice } from "@reduxjs/toolkit";

const inputFieldSlice = createSlice({
  name: "inputField",
  initialState: "",
  reducers: {
    setInputField: (state, action) => {
      return action.payload;
    },
    clearInputField: (state, action) => {
      return action.payload;
    },
  },
});

// Selector
export const selectInputFieldSlice = (state) => state.inputField;

// Actions
export const { setInputField, clearInputField } = inputFieldSlice.actions;

// Reducer
export default inputFieldSlice.reducer;
