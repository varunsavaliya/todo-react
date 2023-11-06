import { combineReducers, createStore } from "redux";
import todoReducer from "./reducer/TodoReducer";

const reducres = combineReducers({todo: todoReducer})

const store = createStore(reducres);

export default store;