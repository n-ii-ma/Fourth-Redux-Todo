import { useSelector, useDispatch } from "react-redux";
import { selectInputFieldSlice } from "./inputFieldSlice";
import { setInputField } from "./inputFieldSlice";

const InputField = () => {
  const dispatch = useDispatch();
  const inputFieldSlice = useSelector(selectInputFieldSlice);

  // Update Input Field State
  const handleInputField = (e) => dispatch(setInputField(e.target.value));

  return (
    <div>
      <label>Enter Task:</label>
      <br />
      <input
        type="text"
        value={inputFieldSlice}
        onChange={handleInputField}
        placeholder="Add Task..."
        required
      />
    </div>
  );
};

export default InputField;
