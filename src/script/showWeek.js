
 function showWeek() {
     const days = document.querySelector('.days');
     days.innerHTML = '';
     const arrElems = [];
     const arrWeeks = ["Mon", "Tue", "Wen", "Tuh", "Fri", "Sat", "Sun"];
     const headerWeek = document.querySelector('.week');
     let WeekHTML = '';
     let weekday = getShowedMonday();



         for (let i = 0; i < 7; i++) {
         const week = document.createElement('div');
           const valueDate = weekday.getDate() < 10 ? '0' + weekday.getDate() : weekday.getDate();

         WeekHTML +=
             `<div class="day">
                 <span class="day_nameDay">${arrWeeks[i]}</span>
                 <div class="day_numberDay">${valueDate}</div>
            </div>`;
             week.classList.add('column-day');
             arrElems.push(week);

         };
     headerWeek.innerHTML = WeekHTML;
     days.append(...arrElems);
 };

export { showWeek };


function getShowedMonday() {
    if (getItemStorage('showedMonday')) {
        return new Date(getItemStorage('showedMonday'));
    }
};

function getItemStorage(key) {
    return JSON.parse(localStorage.getItem(key));
};

