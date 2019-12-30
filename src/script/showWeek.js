
function showWeek() {
    const days = document.querySelector('.days');
    days.innerHTML = '';
    const arrElems = [];
    const arrWeeks = ["Mon", "Tue", "Wen", "Tuh", "Fri", "Sat", "Sun"];
    const headerWeek = document.querySelector('.week');
    let WeekHTML = '';

    for (let i = 0; i < 7; i++) {
        const week = document.createElement('div');

        WeekHTML +=
            `<div class="day">
                <span class="day_nameDay">${arrWeeks[i]}</span>
            </div>`;
            week.classList.add('column-day');
            arrElems.push(week);
    }
    headerWeek.innerHTML = WeekHTML;
    days.append(...arrElems);
};



export { showWeek };
