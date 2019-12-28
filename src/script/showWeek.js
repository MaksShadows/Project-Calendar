 function showWeek () {

   const weeks = document.querySelector('.days');
    const arrWeeks =  ["Mon", "Tue", "Wen", "Tuh", "Fri", "Sat", "Sun"];


   for (let i = 0; i <= 7; i++) {
      const week = document.createElement('div');
         week.classList.add('day'); 
        
        arrWeeks.push(week);
         weeks.append(week);
     };
     arrWeeks.push('day')
      weeks.append(...arrWeeks);
  };

 showWeek();

 export { showWeek };