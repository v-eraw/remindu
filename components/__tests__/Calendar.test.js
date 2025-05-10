import { render, screen, fireEvent } from '@testing-library/react';
import Calendar from '../Calendar';

describe('Calendar Component', () => {
  const mockEvents = [
    {
      id: '1',
      title: 'Test Event',
      start: new Date('2024-01-01T10:00:00'),
      end: new Date('2024-01-01T11:00:00'),
    },
  ];

  it('renders calendar with events', () => {
    render(<Calendar events={mockEvents} />);
    expect(screen.getByText('Test Event')).toBeInTheDocument();
  });

  it('handles event click', () => {
    const handleEventClick = jest.fn();
    render(<Calendar events={mockEvents} onEventClick={handleEventClick} />);

    fireEvent.click(screen.getByText('Test Event'));
    expect(handleEventClick).toHaveBeenCalledWith(mockEvents[0]);
  });

  it('shows empty state when no events', () => {
    render(<Calendar events={[]} />);
    expect(screen.getByText('No events scheduled')).toBeInTheDocument();
  });
});
