import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from '../styles/Calendar.module.scss';
import moment from 'moment';
import { connect } from 'react-redux';
import { generateEventsFromTodos } from '../utils/eventTodosUtils';
import {
  addTodo,
  updateTodo,
  setFilter,
  deleteTodo,
  setNewTodoTitle,
} from '../actions/todos';
import {
  getHexColorForPriority,
  getContrastColor,
  darkenColor,
} from '../utils/priorities';

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

class ResponsiveCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
      selectedEvent: null,
    };
  }

  render() {
    const customEventPropGetter = (priorities) => (event) => {
      let backgroundColor = getHexColorForPriority(
        event.todoMeta.priority,
        priorities
      );
      if (!event.todoMeta.complete) {
        backgroundColor = darkenColor(backgroundColor);
      }
      const textColor = getContrastColor(backgroundColor);
      return {
        style: {
          backgroundColor,
          color: textColor,
          height: '16px',
          fontSize: '12px',
        },
      };
    };

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
            events={this.props.todos.map(generateEventsFromTodos)}
            localizer={localizer}
            formats={formats}
            eventPropGetter={customEventPropGetter(this.props.priorities)}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  filters: state.todos.filters,
  newTodoTitle: state.todos.newTodoTitle,
  priorities: state.todos.priorities,
});

const mapDispatchToProps = {
  addTodo,
  updateTodo,
  setFilter,
  deleteTodo,
  setNewTodoTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveCalendar);
