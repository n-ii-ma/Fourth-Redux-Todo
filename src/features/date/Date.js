import { useSelector, useDispatch } from "react-redux";
import { selectDateSlice } from "./dateSlice";
import { setDate } from "./dateSlice";

const Date = () => {
  const dispatch = useDispatch();
  const dateSlice = useSelector(selectDateSlice);

  // Update Date State
  const handleDate = (e) => dispatch(setDate(e.target.value));

  return (
    <div>
      <label>Enter Date:</label>
      <br />
      <input type="date" value={dateSlice} onChange={handleDate} />
    </div>
  );
};

export default Date;
