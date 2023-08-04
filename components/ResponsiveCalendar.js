import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './Calendar.module.css';
import './React-Big-Calendar.module.css'
import moment from 'moment';

const ResponsiveCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const localizer = momentLocalizer(moment);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const events = [
    {
      title: 'Event 1',
      start: new Date(),
      end: new Date(),
    },
    // ... other events
  ];

  
  const formats = {
    dateFormat: 'D',       // Day of the month (e.g., 5)
    dayFormat: 'ddd',     // Abbreviated day name (e.g., Mon)
    dayRangeHeaderFormat: ({ start, end }) => {
      const startDate = moment(start).format('MMM D'); // Custom format for start date
      const endDate = moment(end).format('MMM D');     // Custom format for end date
      return `${startDate} - ${endDate}`;
    },
    // Add more format options as needed
  };

  return (
    <div>
      <h2 className='white-bubble'>Calendar</h2>
      <div className={styles.container}>
      <Calendar
        className={styles.calendar}
        onChange={handleDateChange}
        value={selectedDate}
        calendarType="US"
        events={events}
        localizer={localizer}
        formats={formats}
      />
      </div>
    </div>
  );
};

export default ResponsiveCalendar;