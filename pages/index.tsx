import React from 'react';
import Calendar from '../components/ResponsiveCalendar';
import TodoList from '../components/TodoList';

const HomePage = () => {
  return (
    <div style={{
      display: 'flex',
      height: '100%',
      background: 'linear-gradient(135deg, #6c5ce7, #3498db, #e0d8ff)',
    }}
    >
      <div style={{ flex: '2' }}>
        <Calendar />
      </div>
      <div style={{ flex: '1' }}>
        <TodoList />
      </div>
    </div>
  );
};

export default HomePage;
