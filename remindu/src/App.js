import logo from './logo.svg';
import './App.css';
import Search from './components/search'
import { useState } from 'react';

const reminders = [
  { id: '1', name: 'reminder to schedule a doctors appointment'}
];

function App() {
  const { search } = window.location;
  const query = new URLSearchParams
  
  return (
    <div>
      <Search />
        <ul>
          {reminders.map((reminder) => (
            <li key={reminder.id}>{reminder.name}</li>
          ))}
        </ul>
    </div>
  );
}

export default App;
