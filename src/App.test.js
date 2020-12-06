import { render, screen } from '@testing-library/react';
import App from './App';
import EventsOverview from './components/EventsOverview';
import Event from './components/Event';

const testEvent = {
  Title: "Wellbeing First - Mindfulness",
  Time: "2021-03-24T02:30:00.000Z",
  Image: "http://example.com/image.png",
  Location: {
    City: "Cairns",
    State: "Queensland",
    Country: "Australia",
  },
  AvailableSeats: [
    {
      id: "W25"
    },
    {
      id: "B29"
    }
  ]
}

test('renders list of events', () => {
  render(<EventsOverview />);
  expect(screen.getByText("Infection Prevention and Control (Australia)")).toBeInTheDocument();
  expect(screen.getByText("2021-03-22T02:30:00.000Z")).toBeInTheDocument();
  expect(screen.getByText("Wellbeing First - Mindfulness")).toBeInTheDocument();
  expect(screen.getByText("2021-03-24T02:30:00.000Z")).toBeInTheDocument();
});

test('renders event properties', () => {
  render(<Event title={testEvent.Title} time={testEvent.Time} eventLocation={testEvent.Location} seats={testEvent.AvailableSeats} />);
  expect(screen.getByText("Wellbeing First - Mindfulness")).toBeInTheDocument();
  expect(screen.getByText("2021-03-24T02:30:00.000Z")).toBeInTheDocument();
});