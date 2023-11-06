import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_IS_FINISHED,
} from "../constants/actions";

export const addTodo = (todoText) => ({
  type: ADD_TODO,
  payload: { todoText: todoText },
});

export const editTodo = (todo, todoText) => ({
  type: EDIT_TODO,
  payload: { todo, todoText },
});

export const updateIsFinished = (todo, isFinished) => ({
  type: UPDATE_IS_FINISHED,
  payload: { todo, isFinished },
});

export const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  payload: { todo },
});
