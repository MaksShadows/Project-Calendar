import { getShowedMonday } from './storage.js';

function showWeek() {
    const days = document.querySelector('.days');
    days.innerHTML = '';
    let weekday = getShowedMonday();
    const arrDaysElems = [];
    const arrNamesWeekdays = ["Mon", "Tue", "Wen", "Tuh", "Fri", "Sat", "Sun"];
    const headerWeek = document.querySelector('.week');
    const titleHeader = document.querySelector('.navigate__MonthAndYear');
    let headerWeekHTML = '';
    let titleHeaderText = '';
    const currentDate = new Date();

    for (let i = 0; i < 7; i++) {
        const valueDateForAttribute = weekday.getDate() < 10 ? '0' + weekday.getDate() : weekday.getDate();
        const day = document.createElement('div');
       
    
        let markedDay = new Date(weekday);
        let isToday = markedDay.setHours(0, 0, 0, 0) === currentDate.setHours(0, 0, 0, 0);
        headerWeekHTML +=
            `<div class="day">
            <span class="day_nameDay">${arrNamesWeekdays[i]}</span>
            <div class="day_numberDay ${isToday ? 'today' : ''}">${valueDateForAttribute}</div>
            <div class="LittleBorder"></div>
        </div>`;
        
        day.classList.add('column-day');
        const date = `${weekday.getFullYear()}-${weekday.getMonth() + 1}-${valueDateForAttribute}`;
        day.setAttribute('data-date', date);
        weekday = getNextDate(weekday);
        arrDaysElems.push(day);
    }
    
    titleHeader.textContent = titleHeaderText;
    headerWeek.innerHTML = headerWeekHTML;
    days.append(...arrDaysElems);

};

function getNextDate(day) {
    let dateInMs = day.getTime();

    return new Date(dateInMs + (24 * 60 * 60 * 1000));
};

export { showWeek };
