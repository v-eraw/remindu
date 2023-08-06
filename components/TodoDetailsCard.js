import React from 'react';
import styles from './TodoDetailsCard.module.css'; // Import your styles

const TodoDetailsCard = ({ todo, onCancel, onSave, onNotesChange, todos }) => {
  function formatDate(inputDate) {
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };

    const formattedDate = new Date(inputDate).toLocaleString('en-US', options);
    return formattedDate;
  }

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
        <strong>Created at:</strong> {formatDate(todo.createdAt)}
      </div>
      {!todo.completed && (
        <div>
          <div>
            <strong>Created day(s) ago:</strong>{' '}
            {calculateDaysDifference(todo.createdAt, new Date())}
            &nbsp;
            {generateSunEmojis(
              calculateDaysDifference(todo.createdAt, new Date())
            )}
          </div>
        </div>
      )}

      <div>
        <strong>Completed:</strong>{' '}
        {todo.completedDate ? formatDate(todo.completedDate) : 'Not yet.'}
      </div>
    </div>
  );
};

export default TodoDetailsCard;
