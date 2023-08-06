import React from 'react';
import Calendar from '../components/ResponsiveCalendar';
import TodoList from '../components/TodoList';

const HomePage = () => {
  return (
    <div className='background-gradient' >
      <div style={{ flex: '2' }}>
        <div className="remindu-title">remindu</div>
        <div style={{ flex: '1' }}>
          <Calendar />
        </div>
      </div>
      <div style={{ flex: '1' }}>
        <TodoList />
      </div>
    </div>
  );
};

export default HomePage;
