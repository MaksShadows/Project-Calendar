
function showWeek() {
    const days = document.querySelector('.days');
    days.innerHTML = '';
    const arrElems = [];
    const arrWeeks = ["Mon", "Tue", "Wen", "Tuh", "Fri", "Sat", "Sun"];
    const Week = document.querySelector('.week');
    let WeekHTML = '';

    for (let i = 0; i < 7; i++) {
        const week = document.createElement('div');
        week.classList.add('day'); 

        WeekHTML +=
            `<div class="day">
            <span class="day_nameDay">${arrWeeks[i]}</span>
            </div>`;

         day.classList.add('column-day');
        arrElems.push(week);
    }

    Week.innerHTML = WeekHTML;
    days.append(...arrElems);

};

 export { showWeek };



