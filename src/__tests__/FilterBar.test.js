import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { EventContext } from '../context/EventContext';
import FilterBar from '../components/FilterBar';

describe('The <FilterBar /> component', () => {
  const changeTitleFilter = jest.fn();
  const changeDateFilter = jest.fn();

  const setupFilterBar = () => render(
    <EventContext.Provider value={{ changeTitleFilter, changeDateFilter }}>
      <FilterBar />
    </EventContext.Provider>
  );

  it('calls changeTitleFilter on title input change', () => {
    const { getByPlaceholderText } = setupFilterBar();

    const titleInput = getByPlaceholderText(/title/i);

    fireEvent.change(titleInput, { target: { value: 'test' } });

    expect(changeTitleFilter).toHaveBeenCalled();
    expect(titleInput.value).toBe('test');
  });

  it('calls changeDateFilter on date input change', () => {
    const { getByPlaceholderText } = setupFilterBar();

    const dateInput = getByPlaceholderText(/date/i);

    fireEvent.change(dateInput, { target: { value: '2020-12-12' } });

    expect(changeDateFilter).toHaveBeenCalled();
    expect(dateInput.value).toBe('2020-12-12');
  });
});