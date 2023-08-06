interface Todo {
  id: number;
  text: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  createdAt: Date;
  completedDate: Date;
  notes: string;
}

export default Todo;