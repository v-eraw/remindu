import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  SET_FILTER,
  SET_NEW_TODO_TITLE,
} from './types';

export const setFilter = (filterMap) => ({
  type: SET_FILTER,
  payload: filterMap,
});

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: null,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const setNewTodoTitle = (title) => ({
  type: SET_NEW_TODO_TITLE,
  payload: title,
});
