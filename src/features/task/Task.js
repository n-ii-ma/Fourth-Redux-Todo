import { useDispatch } from "react-redux";
import { toggleComplete, removeTask } from "./taskSlice";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  // Toggle Complete State and Remove Task Functions
  const handleToggle = () => dispatch(toggleComplete(task));
  const handleRemove = () => dispatch(removeTask(task));

  return (
    <div
      style={{
        textDecoration: task.completed ? "line-through" : "",
        opacity: task.completed ? "0.5" : "",
      }}
    >
      <p>{`'${task.text}' on: '${task.date}'`}</p>
      <button style={{ backgroundColor: "lime" }} onClick={handleToggle}>
        Complete
      </button>
      <button
        style={{ backgroundColor: "red", color: "white" }}
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default Task;
