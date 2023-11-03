import { useContext, useState } from "react";
import todoReducerContext from "../../context/todoReducerContext";

function AddToDo() {
  const { dispatch } = useContext(todoReducerContext);
  const [newTodo, setNewTodo] = useState("");
  return (
    <>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo..."
        type="text"
      />
      <button
        onClick={() => {
          dispatch({ type: "add_todo", payload: { todoText: newTodo } });
          setNewTodo("");
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddToDo;
