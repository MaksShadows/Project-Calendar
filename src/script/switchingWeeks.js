
import { showWeek } from './showWeek.js';
import { getCurWeekDates } from './showWeek.js';
import { setItem, getItem } from './storage.js';


function switchWeeks() {
    const arowsRight = document.querySelector('.navigate__arows_right');
    arowsRight.addEventListener('click', moveWeek);
    const arowsLeft = document.querySelector('.navigate__arows_left');
    arowsLeft.addEventListener('click', lastWeek);
    //const buttonToday = document.querySelector('.navigate_today');
    //buttonToday.addEventListener('click', getToday);
    
  

    function moveWeek() {
        let monday = new Date(getItem('monday'));
        let nextMon = new Date(new Date(monday).setDate(new Date(monday).getDate() + 7));
<<<<<<< HEAD
        
        setItem('monday', nextMon );

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
=======

        setItem('monday', nextMon);

        let arr = getCurWeekDates(nextMon);

        showWeek(arr);
    };
>>>>>>> 46d7ca0adbef7183fdd7595c3eaedf69916d20b1
};



export { switchWeeks };
