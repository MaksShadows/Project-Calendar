import { setItem } from './storage.js';

function showWeek(weekDays) {
    const days = document.querySelector('.days');
     days.innerHTML = '';
    const arrElems = [];
    const arrWeeks = ["Mon", "Tue", "Wen", "Tuh", "Fri", "Sat", "Sun"];
    const arrMonthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const titleHeader = document.querySelector('.navigate__MonthAndYear');
    const headerWeek = document.querySelector('.week');

    let WeekHTML = '';
    let titleHeaderText = '';

    for (let i = 0; i < 7; i++) {
        const week = document.createElement('div');
        week.classList.add('column-day');
       
        WeekHTML +=
            `<div class="day">
                <span class="day_nameDay">${arrWeeks[i]}</span>
                <span class="day_nameDays">${weekDays[i].getDate()}</span>
                <div class="LittleBorder"></div>
                </div>`;
      
        arrElems.push(week);
        
    };
    headerWeek.innerHTML = WeekHTML;
    titleHeader.textContent = titleHeaderText;
    days.append(...arrElems);

};



export function getCurWeekDates(monday) {
    let arr = [];
    arr.push(monday);

    for (let i = 1; i < 7; i++) {
        let nextDay = new Date();
        nextDay.setDate(monday.getDate() + i);
        arr.push(nextDay);
    }

    console.log(arr);

    return arr;
}

export function getMonday() {
    let cur = new Date();
    let day = cur.getDay(),
        diff = cur.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday

    let monday = new Date(cur.setDate(diff));
    setItem('monday', monday);
    return monday;
}




//  export function markDay () {
//     const weekElem = document.querySelector('.day_nameDays');
//     let currenDay;
//      new Date().getDay -1 < 0 ? currenDay = 6 : currenDay = new Date() -1;
//      const findDay = [... weekElem].find();
//      if (findDay !== undefined) {
//          findDay.classList.add('today')
//      };
// };
//   markDay();

export { showWeek };
