import RemainingTasks from "../features/remainingTasks/RemainingTasks";
import InputField from "../features/inputField/InputField";
import Date from "../features/date/Date";
import SubmitButton from "../components/SubmitButton";
import List from "../components/List";
import "../App.css";

function App() {
  return (
    <div className="App">
      <RemainingTasks />
      <br />
      <InputField />
      <br />
      <Date />
      <br />
      <SubmitButton />
      <List />
    </div>
  );
}

export default App;
