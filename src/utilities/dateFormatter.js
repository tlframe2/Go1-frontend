const monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const splitDatetime = datetimeStr => datetimeStr.split('T');
const splitTimezone = timeStr => timeStr.split('.');
const splitDate = dateStr => dateStr.split('-');

const dateFormatter = datetimeStr => {
  // if (!datetimeStr) {
  //   return "";
  // }

  let [date, timeAndTimezone] = splitDatetime(datetimeStr);
  let [time, timezone] = splitTimezone(timeAndTimezone)
  let [year, month, day] = splitDate(date);
  let monthsIndex = parseInt(month) - 1;
  
  return `${monthsArr[monthsIndex]} ${day}, ${year} at ${time}`;
}

export default dateFormatter;