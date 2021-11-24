import { configureStore } from "@reduxjs/toolkit";
import remainingTasksReducer from "../features/remainingTasks/remainingTasksSlice";
import inputFieldReducer from "../features/inputField/inputFieldSlice";
import dateReducer from "../features/date/dateSlice";
import taskReducer from "../features/task/taskSlice";

const preloadedState = localStorage.getItem("ReduxTodo")
  ? JSON.parse(localStorage.getItem("ReduxTodo"))
  : {};

const store = configureStore({
  reducer: {
    remainingTasks: remainingTasksReducer,
    inputField: inputFieldReducer,
    date: dateReducer,
    task: taskReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem("ReduxTodo", JSON.stringify(store.getState()));
});

export default store;
