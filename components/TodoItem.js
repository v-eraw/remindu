import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { FaEye, FaEyeSlash, FaTrash } from 'react-icons/fa';
import TodoDetailsCard from './TodoDetailsCard'; // Import the new component
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const [confetti, setConfetti] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ ...todo });
  const [isFlashing, setIsFlashing] = useState(false);

  const handleToggle = () => {
    setIsCompleted(!isCompleted);
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 4000);
  };

  const handleDelete = () => {
    setIsFlashing(true);
    setTimeout(() => {
      onDelete(todo.id);
    }, 500);
  };

  const handleNotesChange = (value) => {
    setEditedTodo({ ...editedTodo, notes: value });
  };

  const handleDueDateChange = (value) => {
    setEditedTodo({ ...editedTodo, dueDate: value });
  };

  const handleSaveChanges = () => {
    // Save editedTodo to state or make API call to save changes
    // For now, we'll just update the todo state with editedTodo
    setEditedTodo({ ...editedTodo, dueDate: new Date(editedTodo.dueDate) }); // Convert dueDate to Date object
    setShowDetails(false);
  };

  const handleCancelEdit = () => {
    setEditedTodo({ ...todo });
    setShowDetails(false);
  };

  const handleToggleDetails = () => {
    setShowDetails(!isDetailsOpen);
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <div
      className={`${styles['todo-item']} ${
        isCompleted ? styles.completed : ''
      } ${styles['todo-item']} ${isFlashing ? styles.flashing : ''}`}
    >
      {confetti && <Confetti />}
      <input
        type="checkbox"
        className={styles['todo-check']}
        checked={isCompleted}
        onChange={handleToggle}
      />
      <p className={styles['todo-text']}>{editedTodo.text}</p>
      <div className={styles['todo-priority-container']}>
        <div
          className={styles['todo-priority-marker']}
          style={{ backgroundColor: getPriorityColor(editedTodo.priority) }}
        />
        <select
          className={styles['priority-dropdown']}
          value={editedTodo.priority}
          onChange={(e) =>
            setEditedTodo({ ...editedTodo, priority: e.target.value })
          }
        >
          <option value="none">None</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          className={styles['details-button']}
          onClick={handleToggleDetails}
        >
          {isDetailsOpen ? (
            <>
              <FaEyeSlash className={styles['eye-icon']} />
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
      {/* Details card */}
      {showDetails && (
        <TodoDetailsCard
          todo={editedTodo}
          onCancel={handleCancelEdit}
          onSave={handleSaveChanges}
          onNotesChange={handleNotesChange}
          onDueDateChange={handleDueDateChange}
        />
      )}
    </div>
  );
};

export default TodoItem;

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'none':
      return 'transparent';
    case 'low':
      return '#ff7675'; // Red for low priority
    case 'medium':
      return '#fdcb6e'; // Yellow for medium priority
    case 'high':
      return '#00b894'; // Green for high priority
    default:
      return 'transparent';
  }
};
