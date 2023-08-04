import React, { useState } from 'react';
import ConfettiEffect from './Confetti';

const TodoItem = ({ todo, toggleTodo }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleToggle = () => {
    toggleTodo(todo.id);
    

    if (!todo.completed) {
        setShowConfetti(true);

        setTimeout(() => {
        setShowConfetti(false);
        }, 3000); // Reset animations after 3 seconds
    } else {
        setShowConfetti(false);
    }
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
    <ConfettiEffect active={showConfetti} />
    </div>
  );
};

export default TodoItem;