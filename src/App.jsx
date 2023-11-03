import { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/todoContext";
import TodoReducerContext from "./context/todoReducerContext";
import todoReducer from "./reducer/TodoReducer";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <>
      <TodoContext.Provider value={{ todos }}>
        <TodoReducerContext.Provider value={{ dispatch }}>
          <TodoList />
        </TodoReducerContext.Provider>
      </TodoContext.Provider>
    </>
  );
}

export default App;
