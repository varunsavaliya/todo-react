function Todo({ todo, updateIsFinished }) {
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={todo.isChecked}
          onChange={(e) => updateIsFinished(e.target.checked)}
        />
        <span>{todo.text}</span>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </>
  );
}

export default Todo;
