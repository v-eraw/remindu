import React, { Component } from 'react';
import Calendar from '../components/ResponsiveCalendar';
import TodoList from '../components/TodoList';
import styles from '../styles/Gradients.module.scss'

interface HomePageState {
  timeOfDayClass: string;
}

class HomePage extends Component<{}, HomePageState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      timeOfDayClass: 'morning', // Initialize with an empty class
    };
  }

  componentDidMount() {
    this.updateTimeOfDay();
  }

  updateTimeOfDay = () => {
    const currentHour = new Date().getHours();
    let timeOfDayClass = '';
    if (currentHour >= 5 && currentHour < 8) {
      timeOfDayClass = 'dawn';
    } else if (currentHour >= 8 && currentHour < 12) {
      timeOfDayClass = 'morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      timeOfDayClass = 'afternoon';
    } else if (currentHour >= 17 && currentHour < 20) {
      timeOfDayClass = 'dusk';
    } else {
      timeOfDayClass = 'night';
    }

    this.setState({ timeOfDayClass }); // Update the state with the new class
  };

  render() {
    const { timeOfDayClass } = this.state; // Get the class from the state


    return (
      <div className={styles[`${timeOfDayClass}`]}>
        <div style={{ flex: 2 }}>
          <div className="remindu-title">remindu</div>
          <Calendar />
        </div>
        <div style={{ flex: 1 }}>
          <TodoList />
        </div>
      </div>
    );
  }
}


export default HomePage;
