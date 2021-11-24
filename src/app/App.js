import RemainingTasks from "../features/remainingTasks/RemainingTasks";
import InputField from "../features/inputField/InputField";
import Date from "../features/date/Date";
import Button from "../components/Button";
import List from "../components/List";
import "../App.css";

function App() {
  return (
    <div className="App">
      <br />
      <br />
      <RemainingTasks />
      <br />
      <InputField />
      <br />
      <Date />
      <br />
      <Button />
      <br />
      <br />
      <List />
    </div>
  );
}

export default App;
