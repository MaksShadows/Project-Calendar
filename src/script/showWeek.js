 function showWeek () {

   const weeks = document.querySelector('.days');
  const arrElems =[];
    const arrWeeks =  ["Mon", "Tue", "Wen", "Tuh", "Fri", "Sat", "Sun"];


   for (let i = 0; i <= 7; i++) {
      const week = document.createElement('div');
         week.classList.add('day'); 
         const weekDays = document.createElement('span');
         weekDays.classList.add()

        arrWeeks.push(week);
         weeks.append(week);
     };
        arrElems.push('day')
      weeks.append(...arrWeeks);
  };

 showWeek();