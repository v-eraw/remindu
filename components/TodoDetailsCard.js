import React from 'react';
import styles from './TodoDetailsCard.module.scss'; // Import your styles

const TodoDetailsCard = ({ todo, onNotesChange }) => {
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
        <strong>Start:</strong> {formatDate(todo.createdAt)}
      </div>
      <div>
        <strong>End:</strong> {formatDate(todo.completedDate)}
      </div>
      {!todo.complete && (
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
    </div>
  );
};

export default TodoDetailsCard;
