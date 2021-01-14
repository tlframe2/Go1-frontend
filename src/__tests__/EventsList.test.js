import React from 'react';
import { render } from '@testing-library/react';
import { EventContext } from '../context/EventContext';
import EventsList from '../components/EventsList';

describe('The <EventsList /> component', () => {
  const testEvents = [
    {
      Title: "Infection Prevention and Control (Australia)",
      Time: "2021-03-22T02:30:00.000Z",
      Image: "https://images.unsplash.com/photo-1579781403261-cbc8f5010479?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      Location: {
        City: "Brisbane",
        State: "Queensland",
        Country: "Australia",
      }
    },
    {
      Title: "Wellbeing First - Mindfulness",
      Time: "2021-03-24T02:30:00.000Z",
      Image: "https://images.unsplash.com/photo-1602276507500-600178f63aae?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1pbmRmdWxsbmVzc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
  ];

  const setUpEventsList = () => render(
    <EventContext.Provider value={{ filteredEvents: testEvents }}>
      <EventsList />
    </EventContext.Provider>
  );

  it('Should display two events', () => {
    const { getAllByTestId } = setUpEventsList();

    expect(getAllByTestId('EventTile')).toHaveLength(testEvents.length);
  });

  it('Should render title and time of events', () => {
    const { getByText } = setUpEventsList();

    expect(getByText(testEvents[0].Title)).toBeInTheDocument();
    expect(getByText('Mar 22, 2021 at 02:30:00')).toBeInTheDocument();
  });
});