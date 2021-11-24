import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "date",
  initialState: "",
  reducers: {
    setDate: (state, action) => {
      return action.payload;
    },
    clearDate: (state, action) => {
      return action.payload;
    },
  },
});

// Selector
export const selectDateSlice = (state) => state.date;

// Actions
export const { setDate, clearDate } = dateSlice.actions;

// Reducer
export default dateSlice.reducer;
