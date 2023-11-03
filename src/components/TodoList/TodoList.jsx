import { useContext } from "react";
import TodoContext from "../../context/todoContext";
import todoReducerContext from "../../context/todoReducerContext";
import AddToDo from "../AddToDo/AddToDo";
import Todo from "../Todo/Todo";

function TodoList() {
  const { todos } = useContext(TodoContext);
  const { dispatch } = useContext(todoReducerContext);

  function updateTodo(todo, todoText) {
    dispatch({type:'edit_todo', payload:{todo, todoText}})
  }

  function updateIsFinished(todo, isFinished) {
    dispatch({type:'update_is_finished', payload:{todo, isFinished}})
  }

  function deleteTodo(todo) {
    dispatch({type:'delete_todo', payload:{todo}})
  }

  return (
    <>
      <AddToDo />
      {!todos.length > 0 ? (
        <div>Add your new todo</div>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            updateIsFinished={(isFinished) =>
              updateIsFinished(todo, isFinished)
            }
            deleteTodo={() => deleteTodo(todo)}
            updateTodo={(editedText) => updateTodo(todo, editedText)}
          />
        ))
      )}
    </>
  );
}

export default TodoList;
