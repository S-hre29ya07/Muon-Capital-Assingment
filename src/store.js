import { combineReducers, createStore } from "@reduxjs/toolkit";
import { todoReducer } from "./compressing-ele/compressorToDo";
import { visibilityReducer } from "./compressing-ele/visibilityCompressor";

const combinedReducer = combineReducers({
  firstReducer: todoReducer,
  secondReducer: visibilityReducer,
});

export const store = createStore(combinedReducer);
