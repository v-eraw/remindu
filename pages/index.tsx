import React, { Component } from 'react';
import Calendar from '../components/ResponsiveCalendar';
import TodoList from '../components/TodoList';
import styled, { keyframes, css } from 'styled-components';

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

    const StyledFlexContainer = styled.div`
      display: flex;
      height: 100vh;
      background: linear-gradient(
        -45deg,
        ${getGradientColors(timeOfDayClass)}
      );
      background-size: 400% 400%;
      animation: ${getBackgroundGradientAnimation()};
    `;

    const StyledLeftPane = styled.div`
      flex: 2;
    `;

    const StyledRightPane = styled.div`
      flex: 1;
    `;

    return (
      <StyledFlexContainer>
        <StyledLeftPane>
          <div className="remindu-title">remindu</div>
          <Calendar />
        </StyledLeftPane>
        <StyledRightPane>
          <TodoList />
        </StyledRightPane>
      </StyledFlexContainer>
    );
  }
}

const getBackgroundGradientAnimation = () => {
  return css`
    ${gradientAnimation} 30s ease infinite, ${gradientAnimationDetails} 30s ease infinite;
  `;
};

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const gradientAnimationDetails = keyframes`
  0%, 100% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 0% 100%;
  }
`;

const getGradientColors = (timeOfDayClass: string) => {
  switch (timeOfDayClass) {
    case 'dawn':
      return '#FFD700, #FFA500, #FF6347';
    case 'morning':
      return '#00FF7F, #00CED1, #87CEFA';
    case 'afternoon':
      return '#FF4500, #FF69B4, #FFD700, #87CEEB, #40E0D0, #1E90FF';
    case 'dusk':
      return '#FF1493, #FF00FF, #9370DB';
    case 'night':
      return '#4B0082, #483D8B, #000080';
    default:
      return '';
  }
};

export default HomePage;
