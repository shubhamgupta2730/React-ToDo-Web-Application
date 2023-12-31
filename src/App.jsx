import AppName from "./Components/AppName";
import ToDoAdd from "./Components/ToDoAdd";
import ToDoItem1 from "./Components/ToDoItem1";
import ToDoItem2 from "./Components/ToDoItem2";
import './app.css';

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      {/* row 1  */}
      <ToDoAdd></ToDoAdd>
      {/* row 2 */}
      <div className="items-container">
      <ToDoItem1></ToDoItem1>
      {/* row 3  */}
      <ToDoItem2></ToDoItem2>
      </div>
    </center>
  );
}
export default App;
