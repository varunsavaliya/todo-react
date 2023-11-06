import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import AddToDo from "../AddToDo/AddToDo";
import Todo from "../Todo/Todo";
import {
  addTodo,
  editTodo,
  deleteTodo,
  updateIsFinished,
} from "../../actions/todoActions";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const actions = bindActionCreators(
    { addTodo, editTodo, deleteTodo, updateIsFinished },
    dispatch
  );

  return (
    <>
      <AddToDo addTodo={actions.addTodo} />
      {!todos.length > 0 ? (
        <div>Add your new todo</div>
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            updateIsFinished={(isFinished) =>
              actions.updateIsFinished(todo, isFinished)
            }
            deleteTodo={() => actions.deleteTodo(todo)}
            updateTodo={(todoText) => actions.editTodo(todo, todoText)}
          />
        ))
      )}
    </>
  );
}

export default TodoList;
