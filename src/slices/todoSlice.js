import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (todo, action) => {
      const todoText = action.payload.todoText;
      todo.todos.push({
        id: todo.todos.length + 1,
        text: todoText,
        isChecked: false,
      });
    },
    editTodo: (todo, action) => {
      const payloadTodo = action.payload.todo;
      const todoText = action.payload.todoText;
      todo.todos = todo.todos.map((t) => {
        if (t.id == payloadTodo.id) {
          t.text = todoText;
        }
        return t;
      });
    },
    deleteTodo: (todo, action) => {
      const payloadTodo = action.payload.todo;
      todo.todos = todo.todos.filter((t) => t.id !== payloadTodo.id);
    },
    updateIsFinished: (todo, action) => {
      const payloadTodo = action.payload.todo;
      const isFinished = action.payload.isFinished;
      todo.todos = todo.todos.map((t) => {
        if (t.id == payloadTodo.id) {
          t.isChecked = isFinished;
        }
        return t;
      });
    },
  },
});

export const { addTodo, editTodo, deleteTodo, updateIsFinished } =
  todoSlice.actions;

export default todoSlice.reducer;
