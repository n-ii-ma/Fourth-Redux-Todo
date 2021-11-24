import { createSlice } from "@reduxjs/toolkit";

const remainingTasksSlice = createSlice({
  name: "remainingTasks",
  initialState: 0,
  reducers: {
    updateRemainingTasks: (state, action) => {
      return action.payload;
    },
  },
});

// Selector
export const selectRemainingTasksSlice = (state) => state.remainingTasks;

// Action
export const { updateRemainingTasks } = remainingTasksSlice.actions;

// Reducer
export default remainingTasksSlice.reducer;
