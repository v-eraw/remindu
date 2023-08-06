import Todo from '../models/Todo';

const priorityOrder = {
  red: 100,
  orange: 80,
  yellow: 70,
  green: 60,
  blue: 50,
  purple: 40,
  black: 30,
  none: 110,
};

const compareTodosByPriority = (todoA, todoB) => {
  const priorityA = priorityOrder[todoA.priority];
  const priorityB = priorityOrder[todoB.priority];

  if (priorityA > priorityB) {
    return -1;
  } else if (priorityA < priorityB) {
    return 1;
  }
  return 0;
};

export const sortTodos = (todos) => {
  return todos.sort(compareTodosByPriority);
};
