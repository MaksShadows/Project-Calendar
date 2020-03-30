const getMethodsNames = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

const setMethodsNames = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

// ф-ция помогает добавить или отнять определенное количество времени от заданного
// урпощенный аналог популярной библиотеки moment
const shmoment = date => {
  let result = new Date(date);

  const calculator = {
      add(units, value) {
          const currentUnitValue = result[getMethodsNames[units]]();
          result = new Date(
              result[setMethodsNames[units]](currentUnitValue + value),
          );
          return this;
      },
      subtract(units, value) {
          return this.add(units, -value);
      },
      result() {
          return result;
      },
  };

  return calculator;
};

export default shmoment;



const monthsNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// вернет месяц и год для недели, в которой находится переданный день
export const getDisplayedMonth = date => {
  const weekStart = getStartOfWeek(date);
  const weekEnd = shmoment(date).add('days', 6).result();
  const startMonth = weekStart.getMonth();
  const startYear = weekStart.getFullYear();
  const endMonth = weekEnd.getMonth();
  const endYear = weekEnd.getFullYear();
  const isSameMonth = startMonth === endMonth;
  if (isSameMonth) {
      return `${monthsNames[startMonth]} ${startYear}`;
  }
  const isSameYear = startYear === endYear;
  return isSameYear
      ? `${monthsNames[startMonth]} - ${monthsNames[endMonth]} ${startYear}`
      : `${monthsNames[startMonth]} ${startYear} - ${monthsNames[endMonth]} ${endYear}`;
};

