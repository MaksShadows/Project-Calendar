
import { showWeek } from './showWeek.js';
import { getCurWeekDates } from './showWeek.js';


function switchWeeks() {
    const arowsRight = document.querySelector('.navigate__arows_right');
    arowsRight.addEventListener('click', moveWeek);
    const arowsLeft = document.querySelector('.navigate__arows_left');
    arowsLeft.addEventListener('click', moveWeek);
    const buttonToday = document.querySelector('.navigate_today');
    buttonToday.addEventListener('click');
    
  

    function moveWeek() {
        
        let arr = [];
        arr  = getCurWeekDates();
        arr.push(arr[i].getDate());
        day = new Date();
        arr.setDate(day.getDate() + 7);
    
       showWeek();

    };


};



export { switchWeeks };