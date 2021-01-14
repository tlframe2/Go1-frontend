const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const splitDatetime = datetimeStr => datetimeStr.split('T');
const splitTimezone = timeStr => timeStr.split('.');
const splitDate = dateStr => dateStr.split('-');

// Formats date and time into a more readable format. Ex: 2021-03-24 becomes Mar 24, 2021
const dateFormatter = datetimeStr => {
  let [date, timeAndTimezone] = splitDatetime(datetimeStr);
  // eslint-disable-next-line
  let [time, timezone] = splitTimezone(timeAndTimezone)
  let [year, month, day] = splitDate(date);
  let monthsIndex = parseInt(month) - 1;
  
  return `${monthsArr[monthsIndex]} ${day}, ${year} at ${time}`;
}

export default dateFormatter;