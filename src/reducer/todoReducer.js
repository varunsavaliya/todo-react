function todoReducer(state = [], action) {
  if (action.type == "add_todo") {
    const todoText = action.payload.todoText;
    return [
      ...state,
      { id: state.length + 1, text: todoText, isChecked: false },
    ];
  } else if (action.type == "edit_todo") {
    const todo = action.payload.todo;
    const todoText = action.payload.todoText;
    const updatedList = state.map((t) => {
      if (t.id == todo.id) {
        todo.text = todoText;
      }
      return t;
    });
    return updatedList;
  } else if (action.type == "delete_todo") {
    const todo = action.payload.todo;
    const updatedList = state.filter((t) => t.id !== todo.id);
    return updatedList;
  } else if (action.type == "update_is_finished") {
    const todo = action.payload.todo;
    const isFinished = action.payload.isFinished;
    const updatedList = state.map((t) => {
      if (t.id == todo.id) {
        todo.isChecked = isFinished;
      }
      return t;
    });
    return updatedList;
  } else {
    return state;
  }
}

export default todoReducer;
