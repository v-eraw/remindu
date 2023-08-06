import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './Calendar.module.css';
import './React-Big-Calendar.module.css';
import moment from 'moment';
import { filterArrayByMap } from '../utils/filterUtils';
import { connect } from 'react-redux';
import { generateEventsFromTodos } from '../utils/generateEventsFromTodos';
import {
  addTodo,
  updateTodo,
  setFilter,
  deleteTodo,
  setNewTodoText,
} from '../actions/todos';

const localizer = momentLocalizer(moment);
const formats = {
  dateFormat: 'D', // Day of the month (e.g., 5)
  dayFormat: 'ddd', // Abbreviated day name (e.g., Mon)
  dayRangeHeaderFormat: ({ start, end }) => {
    const startDate = moment(start).format('MMM D'); // Custom format for start date
    const endDate = moment(end).format('MMM D'); // Custom format for end date
    return `${startDate} - ${endDate}`;
  },
  // Add more format options as needed
};
function getPriorityColor(event) {
  let color;

  switch (event.priority) {
    case 'red':
      color = '#FF5733'; // Bright Red
      break;
    case 'blue':
      color = '#3498DB'; // Bright Blue
      break;
    case 'orange':
      color = '#FFA500'; // Orange
      break;
    case 'yellow':
      color = '#F9DC5C'; // Yellow
      break;
    case 'green':
      color = '#2ECC71'; // Bright Green
      break;
    case 'purple':
      color = '#AF7AC5'; // Purple
      break;
    default:
      color = '#BDC3C7'; // Default color for 'none' (Light Gray)
      break;
  }

  if (!event.complete) {
    // If the event is not complete, make the color darker
    color = darkenColor(color, 0.5); // Adjust the darkness factor as needed
  }

  return color;
}

// Function to darken a color by a certain factor (0 to 1)
function darkenColor(color, factor) {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  const newR = Math.max(0, Math.min(255, Math.round(r - r * factor)));
  const newG = Math.max(0, Math.min(255, Math.round(g - g * factor)));
  const newB = Math.max(0, Math.min(255, Math.round(b - b * factor)));

  return `#${newR.toString(16).padStart(2, '0')}${newG
    .toString(16)
    .padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
}

const customEventPropGetter = (event) => {
  const backgroundColor = getPriorityColor(event);
  const textColor = getContrastColor(backgroundColor);

  return {
    style: {
      backgroundColor,
      color: textColor,
      height: '16px', // Adjust event height to fit more events
      fontSize: '12px', // Adjust font size to make calendar smaller
    },
  };
};

function getContrastColor(hexColor) {
  // Convert hexadecimal color to RGB
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);

  // Calculate relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Determine contrast color
  const contrastColor = luminance < 0.51 ? 'white' : 'black';
  return contrastColor;
}

class ResponsiveCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
      selectedEvent: null,
    };
  }
  render() {
    const handleDateChange = (date) => {
      this.state.selectedDate(date);
    };
    const { filteredTodos } = this.props;

    return (
      <div>
        <div className={styles.container}>
          <Calendar
            className={styles.calendar}
            onChange={handleDateChange}
            showAllEvents={true}
            value={this.state.selectedDate}
            calendarType="US"
            events={filteredTodos.map(generateEventsFromTodos)}
            localizer={localizer}
            formats={formats}
            eventPropGetter={customEventPropGetter}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  allTodos: state.todos.allTodos,
  filterMap: state.todos.filterMap,
  filteredTodos: filterArrayByMap(state.todos.allTodos, state.todos.filterMap),
  newTodoText: state.todos.newTodoText,
});

const mapDispatchToProps = {
  addTodo,
  updateTodo,
  setFilter,
  deleteTodo,
  setNewTodoText,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveCalendar);
