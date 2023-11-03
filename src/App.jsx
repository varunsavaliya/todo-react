import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";

function App() {
  const [todos, setToDos] = useState([]);
  return (
    <>
      <TodoContext.Provider value={{ todos, setToDos }}>
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
