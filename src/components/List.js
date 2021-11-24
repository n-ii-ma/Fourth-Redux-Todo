import { useSelector } from "react-redux";
import Task from "../features/task/Task";
import { selectTaskSlice } from "../features/task/taskSlice";

const List = () => {
  const taskSlice = useSelector(selectTaskSlice);
  return (
    <div>
      {!taskSlice.length ? (
        <p>No Tasks to Show</p>
      ) : (
        taskSlice.map((task) => <Task task={task} key={task.id} />)
      )}
    </div>
  );
};

export default List;
