export function generateEventsFromTodos(todo) {
  const oneHourLater = new Date(todo.completedDate);
  const event = {
    title: todo.text,
    start: todo.createdAt,
    end: todo.completedDate,
    allDay: false, // Adjust as needed
    //resource: todo.notes,
    complete: todo.complete,
    priority: todo.priority,
  };

  return event;
}
