import { v4 as uuidv4 } from 'uuid';
import {
  ADD_TODO,
  SET_FILTER,
  UPDATE_TODO,
  DELETE_TODO,
  SET_NEW_TODO_TEXT,
} from '../actions/types';
import { filterArrayByMap } from '../utils/filterUtils';
import { sortTodos } from '../utils/todoUtils';

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
  priorities: {},
};
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_TODO_TEXT:
      return {
        ...state,
        newTodoText: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filterMap: action.payload,
        filteredTodos: sortTodos(
          filterArrayByMap(state.allTodos, state.filterMap)
        ),
      };
    case ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        text: state.newTodoText,
        priority: 'none',
        complete: false,
        createdAt: new Date(),
        completedDate: new Date(),
        notes: '',
      };
      return {
        ...state,
        allTodos: sortTodos([...state.allTodos, newTodo]),
        filteredTodos: sortTodos(
          filterArrayByMap([...state.allTodos, newTodo], state.filterMap)
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        allTodos: sortTodos(
          state.allTodos.filter((todo) => todo.id !== action.payload.id)
        ),
        filteredTodos: sortTodos(
          state.filteredTodos.filter((todo) => todo.id !== action.payload.id)
        ),
      };

    case UPDATE_TODO:
      console.log(state.filteredTodos);
      const newAllTodos = state.allTodos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );

      const newFilteredTodos = state.filteredTodos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );

      console.log(sortTodos(newFilteredTodos));
      return {
        ...state,
        allTodos: sortTodos(newAllTodos),
        filteredTodos: sortTodos(newFilteredTodos),
      };
    default:
      return state;
  }
};

export default todosReducer;
