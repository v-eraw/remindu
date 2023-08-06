import React from 'react';
import styles from './TodoDetailsCard.module.css'; // Import your styles

const TodoDetailsCard = ({ todo, onCancel, onSave, onNotesChange, todos }) => {
  function calculateDaysDifference(date1, date2) {
    const oneDayMilliseconds = 1000 * 60 * 60 * 24;

    const timeDifference = Math.abs(date2 - date1);
    const daysDifference = Math.floor(timeDifference / oneDayMilliseconds);

    return daysDifference;
  }

  function generateSunEmojis(days) {
    if (days <= 0) {
      return '';
    }

    const sunEmoji = '🌞';
    return sunEmoji.repeat(days);
  }

  return (
    <div className={styles['details-card']}>
      <div className={styles['edit-notes']}>
        <textarea
          className={styles['notes-input']}
          value={todo.notes}
          placeholder="Add notes..."
          maxLength="1000"
          onChange={(e) => onNotesChange(e.target.value)}
        />
      </div>
      <div>
        <strong>Created at:</strong> {todo.createdAt.toLocaleString()}
      </div>
      <div>
        <strong>Created day(s) ago:</strong>{' '}
        {calculateDaysDifference(todo.createdAt, new Date())}
      </div>
      <div>
        {generateSunEmojis(calculateDaysDifference(todo.createdAt, new Date()))}
      </div>
      <div>
        <strong>Due date:</strong>{' '}
        {todo.dueDate ? todo.dueDate.toLocaleDateString() : 'Not set'}
      </div>
    </div>
  );
};

export default TodoDetailsCard;
