import { useState } from "react";

function Todo({ todo, updateIsFinished, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={todo.isChecked}
          onChange={(e) => updateIsFinished(e.target.checked)}
        />
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <span>{todo.text}</span>
        )}
        <button
          onClick={() => {
            setIsEditing(!isEditing);
            updateTodo(editText);
          }}
        >
          {!isEditing ? "Edit" : "Save"}
        </button>
        <button onClick={() => deleteTodo()}>Delete</button>
      </div>
    </>
  );
}

export default Todo;
