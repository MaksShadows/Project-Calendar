import { showWeek } from './showWeek.js';
import { getCurWeekDates } from './showWeek.js';
import { setItem, getItem } from './storage.js';


function switchWeeks() {
  const arowsRight = document.querySelector('.navigate__arows_right');
  arowsRight.addEventListener('click', moveWeek);
  const arowsLeft = document.querySelector('.navigate__arows_left');
  arowsLeft.addEventListener('click', lastWeek);
  const buttonToday = document.querySelector('.navigate_today');
  buttonToday.addEventListener('click', getToday);



  function moveWeek() {
    let monday = new Date(getItem('monday'));
    let nextMon = new Date(new Date(monday).setDate(new Date(monday).getDate() + 7));

    debugger;

    setItem('monday', nextMon);

    let arr = getCurWeekDates(nextMon);

    showWeek(arr);
  };
  function lastWeek() {
    let monday = new Date(getItem('monday'));
    let lastMon = new Date(new Date(monday).setDate(new Date(monday).getDate() - 7));

    setItem('monday', lastMon);

    let arr = getCurWeekDates(lastMon);

    showWeek(arr);
  };

  function getToday() {
    const arr = getCurWeekDates();
    showWeek(arr);
  };
};

export { switchWeeks };

