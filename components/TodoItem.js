import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { FaEye, FaEyeSlash, FaTrash } from 'react-icons/fa';
import TodoDetailsCard from './TodoDetailsCard'; // Import the new component
import styles from './TodoItem.module.scss';
import { connect } from 'react-redux';
import { deleteTodo, updateTodo } from '../actions/todos';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [confetti, setConfetti] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);

  const handleTextChange = (event) => {
    updateTodo({ ...todo, text: event.target.textContent });
  };

  const handleToggleComplete = () => {
    const completed = !todo.complete;
    updateTodo({
      ...todo,
      complete: completed,
      completedDate: completed ? new Date() : todo.createdAt,
    });
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 4000);
  };

  const handleDelete = () => {
    setIsFlashing(true);
    setTimeout(() => {
      deleteTodo(todo.id);
    }, 300);
  };

  const handleNotesChange = (value) => {
    updateTodo({ ...todo, notes: value });
  };

  const handleToggleDetails = () => {
    setShowDetails(!isDetailsOpen);
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <div
      className={`${styles['todo-item']} ${isFlashing ? styles.flashing : ''} 
      ${todo.complete ? styles.completed : ''}
      `}
    >
      <div
        className={`${styles['todo-item-not-details']} 
        ${isFlashing ? styles.flashing : ''} 
        ${todo.complete ? styles.completed : ''}`}
      >
        {confetti && <Confetti />}
        <div className={styles['checkbox-container']}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={handleToggleComplete}
            className={styles['custom-checkbox']}
          />
        </div>
        <p
          contentEditable={true}
          onInput={handleTextChange}
          className={
            styles['todo-text'] +
            ` ${todo.complete ? styles.completed : ''} 
              ${isFlashing ? styles.flashing : ''}
              ${todo.complete ? styles.completedText : ''}
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
            onChange={(e) => updateTodo({ ...todo, priority: e.target.value })}
          >
            <option value="none">None</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
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
        <TodoDetailsCard todo={todo} onNotesChange={handleNotesChange} />
      )}
    </div>
  );
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'none':
      return '#ffffff'; // White color for "None"
    case 'red':
      return '#d44f6b'; // Red color
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
    default:
      return '#ffffff'; // Default color (white) for unknown priorities
  }
};

const mapStateToProps = (state) => ({
  todos: state.todos, // Adjust this to your actual state structure
});

const mapDispatchToProps = {
  deleteTodo,
  updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
