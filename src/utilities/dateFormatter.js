// const digitToMonthAbbrev = {
//   01: 'Jan',
//   02: 'Feb',
//   03: 'Mar',
//   04: 'Apr',
//   05: 'May',
//   06: 'Jun',
//   07: 'Jul',
//   08: 'Aug',
//   09: 'Sep',
//   10: 'Oct',
//   11: 'Nov',
//   12: 'Dec'
// }

const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const splitDatetime = datetimeStr => datetimeStr.split('T');
const splitTimezone = timeStr => timeStr.split('.');
const splitDate = dateStr => dateStr.split('-');

const dateFormatter = datetimeStr => {
  let [date, timeAndTimezone] = splitDatetime(datetimeStr);
  let [time, timezone] = splitTimezone(timeAndTimezone)
  let [year, month, day] = splitDate(date);
  let monthsIndex = parseInt(month) - 1;

  console.log('Year', year);
  console.log('Month', month);
  console.log('Day', day);
  
  return `${monthsArr[monthsIndex]} ${day}, ${year} at ${time}`;
}

export default dateFormatter;