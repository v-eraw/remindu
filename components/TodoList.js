import React, { useState } from 'react';
import TodoItem from './TodoItem'; // Import the TodoItem component
import styles from './TodoList.module.css'; // Import your styles

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Complete assignment',
      priority: 'high',
      completed: false,
      createdAt: new Date('2023-08-01'),
      dueDate: null,
      notes: '',
    },
    // ... add more todo items
  ]);

  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        text: newTodoText,
        priority: 'none',
        completed: false,
        createdAt: new Date(),
        dueDate: null,
        notes: '',
      };
      setTodos([...todos, newTodo]);
      setNewTodoText('');
    }
  };

  const updateTodo = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  // Sort the todos array by priority (high > medium > low > none) and due date
  const sortedTodos = todos.slice().sort((a, b) => {
    const priorityOrder = ['high', 'medium', 'low', 'none'];
    const priorityComparison =
      priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority);

    if (priorityComparison !== 0) {
      return priorityComparison;
    }

    if (a.dueDate && b.dueDate) {
      return a.dueDate - b.dueDate;
    } else if (a.dueDate) {
      return -1;
    } else if (b.dueDate) {
      return 1;
    } else {
      return 0;
    }
  });

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newTodoText.trim() !== '') {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className={styles['todo-list']}>
      <div className={styles['todo-list-title']}>Todo List</div>
      <div className={styles['add-todo-container']}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Enter a new todo..."
          className={styles['add-todo-input']}
          onKeyPress={handleKeyPress}
        />
        <button className={styles['add-todo-button']} onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      {sortedTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDeleteTodo}
          onUpdate={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;