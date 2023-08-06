import React, { useState } from 'react';
import TodoItem from './TodoItem'; // Import the TodoItem component
import styles from './TodoList.module.css'; // Import your styles
import { v4 as uuidv4 } from 'uuid';
import { sortTodos } from '../utils/todoUtils';
import FilterButton from './FilterButton';

const TodoList = () => {
  // eslint-disable-next-line no-unused-vars
  const [filters, setFilters] = useState({
    red: false,
    // Add other filter options here
  });

  const handleFilterChange = (name, checked) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Complete assignment',
      priority: 'red',
      completed: false,
      createdAt: new Date('2023-08-01'),
      completedDate: null,
      notes: '',
    },
    {
      id: 2,
      text: 'Eat veggies',
      priority: 'green',
      completed: true,
      createdAt: new Date('2023-08-03'),
      completedDate: new Date('2023-07-24'),
      notes: '',
    },
  ]);

  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo = {
        id: uuidv4(),
        text: newTodoText,
        priority: 'none',
        completed: false,
        createdAt: new Date(),
        completedDate: null,
        notes: '',
      };
      setTodos(sortTodos([...todos, newTodo]));
      setNewTodoText('');
    }
  };

  const updateTodo = (updatedTodo) => {
    setTodos(
      sortTodos(
        todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
      )
    );
  };

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
      <div className={styles['todo-list-header']}>
        <div className={styles['todo-list-title']}>Todo List</div>
        <FilterButton onFilterChange={handleFilterChange} />
      </div>
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
      {todos.map((todo) => (
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
