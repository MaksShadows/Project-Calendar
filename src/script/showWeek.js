
 function showWeek(weekDays) {
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
                <span class="day_nameDays">${weekDays[i].getDate()}</span>
                <div class="LittleBorder"></div>
                </div>`;
            week.classList.add('column-day');
            arrElems.push(week);
          
        };
    headerWeek.innerHTML = WeekHTML;
    days.append(...arrElems);
    
};

 export function getCurWeekDates(monday) {  
    let arr = [];
    arr.push(monday);
  
    for(let i = 1; i < 7; i++){
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
    return new Date(cur.setDate(diff));
  }

export { showWeek };
