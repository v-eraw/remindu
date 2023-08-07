import priorityMap from './priorities';

export const compareTodos = (todoA, todoB) => {
  const createdDateA = todoA.createdDate;
  const createdDateB = todoB.createdDate;
  const completeA = todoA.complete ? -1 : 1;
  const completeB = todoB.complete ? -1 : 1;
  const priorityA = priorityMap[todoA.priority].order;
  const priorityB = priorityMap[todoB.priority].order;

  if (completeA > completeB) {
    return -1;
  } else if (completeA < completeB) {
    return 1;
  }

  if (createdDateA > createdDateB) {
    return -1;
  } else if (createdDateA < createdDateB) {
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
