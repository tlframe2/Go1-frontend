import React from 'react';
import { render, waitFor, cleanup, screen } from '@testing-library/react';
import App from './App';
import Event from './components/Event';
import mockedAxios from 'axios';

afterEach(cleanup);

test('mocks axios request and renders events', async () => {
  const data = {
    data: [
      {
        Title: "Infection Prevention and Control (Australia)",
        Time: "2021-03-22T02:30:00.000Z",
        Image: "http://example.com/image.png",
        Location: {
          City: "Brisbane",
          State: "Queensland",
          Country: "Australia",
        }
      },
      {
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
      },
      {
        Title: "10 Minutes Managing Stress",
        Time: "2021-03-24T02:30:00.000Z",
        Image: "http://example.com/image.png",
        Location: {
          City: "Gold Coast",
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
      },
      {
        Title: "10 Minute Pandemic Awareness",
        Time: "2021-03-24T02:30:00.000Z",
        Image: "http://example.com/image.png",
        Location: {
          City: "Gold Coast",
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
      },
      {
        Title: "Morning Yoga Kickstart",
        Time: "2021-03-24T02:30:00.000Z",
        Image: "http://example.com/image.png",
        Location: {
          City: "Gold Coast",
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
      },
      {
        Title: "Hand Hygiene in the Workplace",
        Time: "2021-03-24T02:30:00.000Z",
        Image: "http://example.com/image.png",
        Location: {
          City: "Gold Coast",
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
      },
      {
        Title: "Equal Employment Opportunity",
        Time: "2021-03-24T02:30:00.000Z",
        Image: "http://example.com/image.png",
        Location: {
          City: "Gold Coast",
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
      },
      {
        Title: "First Aid - Basics",
        Time: "2021-03-24T02:30:00.000Z",
        Image: "http://example.com/image.png",
        Location: {
          City: "Gold Coast",
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
      },
    ]
  };

  mockedAxios.get.mockResolvedValueOnce(data);

  render(<App />);

  await waitFor(() => {
    expect(screen.getByText("Infection Prevention and Control (Australia)")).toBeInTheDocument();
    expect(screen.getByText("Wellbeing First - Mindfulness")).toBeInTheDocument();
  });

});

test('renders event properties', () => {
  render(<Event title={"Infection Prevention and Control (Australia)"} time={"2021-03-22T02:30:00.000Z"} />);
  expect(screen.getByText("Infection Prevention and Control (Australia)")).toBeInTheDocument();
  expect(screen.getByText("2021-03-22T02:30:00.000Z")).toBeInTheDocument();
});