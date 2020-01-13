
import { showWeek } from './showWeek.js';


function switchWeeks() {
    const arowsRight = document.querySelector('.navigate__arows_right');
    arowsRight.addEventListener('click', moveWeek);
    const arowsLeft = document.querySelector('.navigate__arows_left');
    arowsLeft.addEventListener('click', moveWeek);
    const buttonToday = document.querySelector('.navigate_today');
    buttonToday.addEventListener('click', getToday);
    
    showWeek();
    const date = new Date(date.getDate(+7) - date.getDate(-7));

    function moveWeek() {
        
       
       
    };

    function getToday() {
    
        const date = new Date();

        return new Date(date.getDate());

    }


};



export { switchWeeks };