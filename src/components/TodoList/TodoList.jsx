import { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import AddToDo from "../AddToDo/AddToDo";
import Todo from "../Todo/Todo";

function TodoList() {
  const { todos, setToDos } = useContext(TodoContext);
  return (
    <>
      <AddToDo
        addNew={(newTodo) =>
          setToDos([
            ...todos,
            { id: todos.length + 1, text: newTodo, isChecked: false },
          ])
        }
      />
      {!todos.length > 0 ? <div>Add your new todo</div> :
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            updateIsFinished={(isFinished) => {
              const updatedList = todos.map((t) => {
                if (t.id == todo.id) {
                  todo.isChecked = isFinished;
                }
                return t;
              });
              setToDos(updatedList);
            }}
            deleteTodo={() => {
              const updatedList = todos.filter((t) => t.id !== todo.id);
              setToDos(updatedList);
            }}
            updateTodo={(editedText) => {
              const updatedList = todos.map((t) => {
                if (t.id == todo.id) {
                  todo.text = editedText;
                }
                return t;
              });
              setToDos(updatedList);
            }}
          />
        ))}
    </>
  );
}

export default TodoList;
