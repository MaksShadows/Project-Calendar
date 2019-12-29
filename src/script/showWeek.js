
function showWeek() {
    const days = document.querySelector('.days');
    days.innerHTML = '';
    const arrElems = [];
    const arrWeeks = ["Mon", "Tue", "Wen", "Tuh", "Fri", "Sat", "Sun"];
    const headerWeek = document.querySelector('.week');
    let headerWeekHTML = '';

    for (let i = 0; i < 7; i++) {
        const day = document.createElement('div');

        headerWeekHTML +=
            `<div class="day">
                <span class="day_nameDay">${arrWeeks[i]}</span>
            </div>`;
        day.classList.add('column-day');
        arrElems.push(day);
    }
    headerWeek.innerHTML = headerWeekHTML;
    days.append(...arrElems);
};



export { showWeek };
