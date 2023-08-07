export function generateEventsFromTodos(todo) {
  const oneHourLater = new Date(todo.completedDate);
  const event = {
    title: todo.title,
    start: todo.startDate,
    end: todo.endDate,
    allDay: false, // Adjust as needed
    todoMeta: {
      id: todo.id,
      complete: todo.complete,
      priority: todo.priority,
    },
  };

  return event;
}

export function updateTodosFromEvents(existingTodos, event) {
  const updatedTodos = existingTodos.map((todo) => {
    if (todo.id === event.todoMeta.id) {
      return {
        ...todo,
        startDate: event.start,
        endDate: event.end,
      };
    }
    return todo;
  });

  return updatedTodos;
}
