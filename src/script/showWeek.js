

 function showWeek() {
    const days = document.querySelector('.days');
    days.innerHTML = '';
    const arrElems = [];
    const arrWeeks = ["Mon", "Tue", "Wen", "Tuh", "Fri", "Sat", "Sun"];
    const arrDays = ["1", "2", "3", "4", "5", "6", "7"];
    const headerWeek = document.querySelector('.week');
    let WeekHTML = '';


        for (let i = 0; i < 7; i++) {
        const week = document.createElement('div');
       
        WeekHTML +=
            `<div class="day">
                <span class="day_nameDay">${arrWeeks[i]}</span>
                <div class="day_numberDay">${arrDays[i]}</div>
                </div>`;
            week.classList.add('column-day');
         
            arrElems.push(week);

        };
    headerWeek.innerHTML = WeekHTML;
    days.append(...arrElems);
};

export { showWeek };





