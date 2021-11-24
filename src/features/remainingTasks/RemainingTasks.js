import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectRemainingTasksSlice } from "./remainingTasksSlice";
import { selectTaskSlice } from "../task/taskSlice";
import { updateRemainingTasks } from "./remainingTasksSlice";

const RemainingTasks = () => {
  const dispatch = useDispatch();
  const remainingTasksSlice = useSelector(selectRemainingTasksSlice);
  const taskSlice = useSelector(selectTaskSlice);

  useEffect(() => {
    // Number of Incomplete Tasks
    const incompleteTasks = taskSlice.filter((task) => !task.completed).length;

    // Update the Remaining Tasks
    dispatch(updateRemainingTasks(incompleteTasks));
  }, [taskSlice, dispatch]);

  return (
    <div>
        Tasks Remaining: {remainingTasksSlice}
    </div>
)
};

export default RemainingTasks;
