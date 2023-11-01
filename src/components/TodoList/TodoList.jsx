import { useState } from "react";
import AddToDo from "../AddToDo/AddToDo";
import Todo from "../Todo/Todo";

function TodoList() {
  const [todos, setToDos] = useState([
    { id: 1, text: "Buy groceries", isChecked: false },
    { id: 2, text: "Walk the dog", isChecked: true },
    { id: 3, text: "Finish work project", isChecked: false },
    { id: 4, text: "Go to the gym", isChecked: false },
    { id: 5, text: "Read a book", isChecked: true },
  ]);

  return (
    <>
      <AddToDo
        addNew={(newTodo) => setToDos([...todos, { id: todos.length + 1, text: newTodo, isChecked: false, }])}
      />
      {todos.length > 0 &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            updateIsFinished={(isFinished) => {
              console.log(isFinished);
              const updatedList = todos.map((t) => {
                if (t.id == todo.id) {
                  todo.isChecked = isFinished;
                }
                return t;
              });
              console.log(updatedList);
              setToDos(updatedList);
            }}
          />
        ))}
    </>
  );
}

export default TodoList;
