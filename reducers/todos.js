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
  newTodoText: '',
  allTodos: [
    {
      id: uuidv4(),
      text: 'hi',
      priority: 'none',
      complete: false,
      createdAt: new Date(),
      completedDate: new Date(),
      notes: '',
    },
  ],
  filteredTodos: [],
  filterMap: {
    red: false,
    orange: false,
    yellow: false,
    green: false,
    blue: false,
    purple: false,
    none: false,
    incomplete: false,
    complete: false,
  },
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
      console.log('odl: ');
      console.log(action.payload);
      return {
        ...state,
        allTodos: sortTodos(
          state.allTodos.map((todo) =>
            todo.id === action.payload.id ? action.payload : todo
          )
        ),
        filteredTodos: sortTodos(
          state.filteredTodos.map((todo) =>
            todo.id === action.payload.id ? action.payload : todo
          )
        ),
      };
    default:
      return state;
  }
};

export default todosReducer;
