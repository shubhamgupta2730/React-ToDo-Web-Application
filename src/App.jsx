import AppName from "./Components/AppName";
import ToDoAdd from "./Components/ToDoAdd";
import ToDoItems from "./Components/ToDoItems";
import "./app.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04/12/2023",
    },
    {
      name: "Go to college",
      dueDate: "04/12/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <div className="items-container">
        <ToDoAdd></ToDoAdd>
      </div>

      <ToDoItems todoItems={todoItems}></ToDoItems>
    </center>
  );
}
export default App;
