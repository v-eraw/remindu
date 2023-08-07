export function filterArrayByMap(array, filterMap) {
  return array.filter((item) => {
    // Check if the item matches any of the filter conditions
    if (
      (filterMap.priority && filterMap.priority[item.priority]) ||
      (filterMap.complete && filterMap.complete.complete === item.complete) ||
      (filterMap.complete && filterMap.complete.incomplete === !item.complete)
    ) {
      return false; // Item matches at least one filter, exclude
    }
    return true; // Item does not match any filter, include it
  });
}

export function applyVisibleFilterToTodo(todo, filters) {
  return {
    ...todo,
    visible:
      (filters.priority && filters.priority[todo.priority]) ||
      (filters.complete && filters.complete.complete === todo.complete) ||
      (filters.complete && filters.complete.incomplete !== todo.complete),
  };
}

export function applyVisibleFilterTodos(todos, filters) {
  return todos.map((todo) => ({
    ...todo,
    visible:
      (filters.priority && filters.priority[todo.priority]) ||
      (filters.complete && filters.complete.complete === todo.complete) ||
      (filters.complete && filters.complete.incomplete !== todo.complete),
  }));
}

export function getVisibleTodos(todos) {
  return todos.filter((todo) => todo.visible);
}

export function getHiddenTodos(todos) {
  return todos.filter((todo) => !todo.visible);
}

export function countHiddenTodos(todos) {
  return todos.reduce((count, todo) => {
    if (!todo.visible) {
      return count + 1;
    }
    return count;
  }, 0);
}
