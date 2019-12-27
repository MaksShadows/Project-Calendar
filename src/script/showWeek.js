import { getShowedMonday } from './storage.js';

function showWeek() {
    const days = document.querySelector('.days');
    days.innerHTML = '';
    let weekday = getShowedMonday();
    const arrElems = [];
    const arrWeeks = ["Mon", "Tue", "Wen", "Tuh", "Fri", "Sat", "Sun"];
    const headerWeek = document.querySelector('.week');
    const titleHeader = document.querySelector('.navigate__MonthAndYear');
    let headerWeekHTML = '';
    let titleHeaderText = '';
    const currentDate = new Date();

    for (let i = 0; i < 7; i++) {
        const valueDate = weekday.getDate() < 10 ? '0' + weekday.getDate() : weekday.getDate();
        const day = document.createElement('div');
       
        const Day = new Date(weekday);
        const Today = Day.setHours(0, 0, 0, 0) === currentDate.setHours(0, 0, 0, 0);

        headerWeekHTML +=
            `<div class="day">
            <span class="day_nameDay">${arrWeeks[i]}</span>
            <div class="day_numberDay ${Today ? 'today' : ''}">${valueDate}</div>
            </div>`;
        
        day.classList.add('column-day');
        const date = `${weekday.getFullYear()}-${weekday.getMonth() + 1}-${valueDate}`;
        day.setAttribute('data-date', date);
        weekday = getNextDate(weekday);
        arrElems.push(day);
    }
    
    titleHeader.textContent = titleHeaderText;
    headerWeek.innerHTML = headerWeekHTML;
    days.append(...arrElems);

};

function getNextDate(day) {
    let dateInMs = day.getTime();

    return new Date(dateInMs + (24 * 60 * 60 * 1000));
};


 export { showWeek };






