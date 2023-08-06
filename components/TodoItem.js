import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { FaEye, FaEyeSlash, FaTrash } from 'react-icons/fa';
import TodoDetailsCard from './TodoDetailsCard'; // Import the new component
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, onDelete, onUpdate, todos }) => {
  const [confetti, setConfetti] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);

  const handleToggleComplete = () => {
    onUpdate({ ...todo, completed: !todo.completed });
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 4000);
  };

  const handleDelete = () => {
    setIsFlashing(true);
    setTimeout(() => {
      onDelete(todo.id);
    }, 300);
  };

  const handleNotesChange = (value) => {
    onUpdate({ ...todo, notes: value });
  };

  const handleDueDateChange = (value) => {
    onUpdate({ ...todo, dueDate: value });
  };

  const handleSaveChanges = () => {
    onUpdate({ ...todo, dueDate: new Date(todo.dueDate) }); // Convert dueDate to Date object
    setShowDetails(false);
  };

  const handleToggleDetails = () => {
    setShowDetails(!isDetailsOpen);
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <div
      className={`${styles['todo-item']} ${isFlashing ? styles.flashing : ''}`}
    >
      <div
        className={`${styles['todo-item-not-details']} ${
          isFlashing ? styles.flashing : ''
        }`}
      >
        {confetti && <Confetti />}
        <div className={styles['checkbox-container']}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggleComplete}
            className={styles['custom-checkbox']}
          />
        </div>
        <p
          contentEditable={true}
          className={
            styles['todo-text'] +
            ` ${todo.completed ? styles.completed : ''} 
              ${isFlashing ? styles.flashing : ''}
            `
          }
        >
          {todo.text}
        </p>
        <div className={styles['todo-priority-container']}>
          <div
            className={
              styles['todo-priority-marker'] +
              `${isFlashing ? styles.flashing : ''}`
            }
            style={{ backgroundColor: getPriorityColor(todo.priority) }}
          />
          <select
            className={styles['priority-dropdown']}
            value={todo.priority}
            onChange={(e) => onUpdate({ ...todo, priority: e.target.value })}
          >
            <option value="none">None</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="black">Black</option>
          </select>
          <button
            className={styles['details-button']}
            onClick={handleToggleDetails}
          >
            {isDetailsOpen ? (
              <>
                <FaEyeSlash className={styles['eye-icon-closed']} />
              </>
            ) : (
              <>
                <FaEye className={styles['eye-icon']} />
              </>
            )}
          </button>
          <button className={styles['delete-button']} onClick={handleDelete}>
            <FaTrash />
          </button>
        </div>
      </div>
      {showDetails && (
        <TodoDetailsCard
          todo={todo}
          onSave={handleSaveChanges}
          onNotesChange={handleNotesChange}
          onDueDateChange={handleDueDateChange}
          todos={todos}
        />
      )}
    </div>
  );
};

export default TodoItem;

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'none':
      return '#ffffff'; // White color for "None"
    case 'red':
      return '#e74c3c'; // Red color
    case 'orange':
      return '#ff8c00'; // Orange color
    case 'yellow':
      return '#f1c40f'; // Yellow color
    case 'green':
      return '#2ecc71'; // Green color
    case 'blue':
      return '#3498db'; // Blue color
    case 'purple':
      return '#9b59b6'; // Purple color
    case 'black':
      return '#000000';
    default:
      return '#ffffff'; // Default color (white) for unknown priorities
  }
};
