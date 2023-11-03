import { useState } from "react";

function AddToDo({ addNew }) {
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
          addNew(newTodo);
          setNewTodo("");
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddToDo;
