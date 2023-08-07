import { v4 as uuidv4 } from 'uuid';
import {
  ADD_TODO,
  SET_FILTER,
  UPDATE_TODO,
  DELETE_TODO,
  SET_NEW_TODO_TITLE,
} from '../actions/types';
import { sortTodos } from '../utils/sortUtils';
import priorities from '../utils/priorities';
import { applyVisibleFilterToTodo } from '../utils/filterUtils';

const initialState = {
  newTodoTitle: '',
  todos: [
    {
      id: uuidv4(),
      title: 'hi',
      priority: 'none',
      createdDate: new Date(),
      completedDate: new Date(),
      startDate: new Date(),
      endDate: new Date(),
      visible: true,
      complete: false,
      notes: '',
    },
  ],
  filters: {
    priorityStatus: {
      red: false,
      orange: false,
      yellow: false,
      green: false,
      blue: false,
      purple: false,
      none: false,
    },
    completeStatus: {
      incomplete: false,
      complete: false,
    },
  },
  priorities: priorities,
};
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_TODO_TITLE:
      return {
        ...state,
        newTodoTitle: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filters: action.payload,
        todos: sortTodos(applyVisibleFilterTodos(state.todos, action.payload)),
      };
    case ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        title: state.newTodoTitle,
        priority: 'none',
        createdDate: new Date(),
        completedDate: new Date(),
        startDate: new Date(),
        endDate: new Date(new Date().getTime() + 60 * 60 * 1000),
        visible: true,
        complete: false,
      };
      newTodo = applyVisibleFilterToTodo(newTodo, state.filters);
      return {
        ...state,
        todos: sortTodos([...state.todos, newTodo]),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: sortTodos(
          state.todos.filter((todo) => todo.id !== action.payload.id)
        ),
      };
    case UPDATE_TODO:
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      updateTodos = applyVisibleFilterToTodo(updatedTodos, state.filters);
      return {
        ...state,
        todos: sortTodos(updatedTodos),
      };
    default:
      return state;
  }
};

export default todosReducer;
