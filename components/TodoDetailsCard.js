import React from 'react';
import styles from './TodoDetailsCard.module.css'; // Import your styles

const TodoDetailsCard = ({ todo, onCancel, onSave, onNotesChange }) => {
  return (
    <div className={styles['details-card']}>
      <h3>Edit Details</h3>
      <p>
        <strong>Created at:</strong> {todo.createdAt.toLocaleString()}
      </p>
      <p>
        <strong>Due date:</strong>{' '}
        {todo.dueDate ? todo.dueDate.toLocaleDateString() : 'Not set'}
      </p>
      <div className={styles['edit-notes']}>
        <textarea
          className={styles['notes-input']}
          value={todo.notes}
          placeholder="Add notes (up to 200 characters)..."
          maxLength="200"
          onChange={(e) => onNotesChange(e.target.value)}
        />
      </div>
      <div className={styles['edit-actions']}>
        <button className={styles['save-button']} onClick={onSave}>
          Save
        </button>
        <button className={styles['cancel-button']} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TodoDetailsCard;
