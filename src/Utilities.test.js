import dateFormatter from './utilities/dateFormatter';

describe('dateFormatter should format dates', () => {
  test("2021-03-03T02:30:00.000Z should equal Mar 03, 2021 at 02:30:00", () => {
    expect(dateFormatter('2021-03-03T02:30:00.000Z')).toBe('Mar 03, 2021 at 02:30:00');
  });

  test("2021-12-25T16:20:00.000Z should equal Dec 25, 2021 at 16:20:00", () => {
    expect(dateFormatter('2021-12-25T16:20:00.000Z')).toBe('Dec 25, 2021 at 16:20:00');
  });
});