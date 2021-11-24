import { useSelector, useDispatch } from "react-redux";
import { selectInputFieldSlice } from "../features/inputField/inputFieldSlice";
import { selectDateSlice } from "../features/date/dateSlice";
import { clearInputField } from "../features/inputField/inputFieldSlice";
import { clearDate } from "../features/date/dateSlice";
import { addTask } from "../features/task/taskSlice";

const SubmitButton = () => {
  const dispatch = useDispatch();
  const inputFieldSlice = useSelector(selectInputFieldSlice);
  const dateSlice = useSelector(selectDateSlice);

  // Submit Task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputFieldSlice || !dateSlice) return;

    dispatch(
      addTask({
        text: inputFieldSlice,
        date: dateSlice,
      })
    );

    dispatch(clearInputField(""));
    dispatch(clearDate(""));
  };

  return (
    <div>
      <button type="submit" onClick={handleSubmit}>
        Add Task
      </button>
    </div>
  );
};

export default SubmitButton;
