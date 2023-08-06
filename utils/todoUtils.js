const priorityOrder = {
  none: 100,
  red: 90,
  orange: 80,
  yellow: 70,
  green: 60,
  blue: 50,
  purple: 40,
};

export const compareTodos = (todoA, todoB) => {
  const createdAtA = todoA.createdAt;
  const createdAtB = todoB.createdAt;
  const completedA = todoA.complete ? -1 : 1;
  const completedB = todoB.complete ? -1 : 1;
  const priorityA = priorityOrder[todoA.priority];
  const priorityB = priorityOrder[todoB.priority];

  if (completedA > completedB) {
    return -1;
  } else if (completedA < completedB) {
    return 1;
  }

  if (createdAtA > createdAtB) {
    return -1;
  } else if (createdAtA < createdAtB) {
    return 1;
  }

  if (priorityA > priorityB) {
    return -1;
  } else if (priorityA < priorityB) {
    return 1;
  }
  return 0;
};

export const sortTodos = (todos) => {
  return todos.sort(compareTodos);
};
