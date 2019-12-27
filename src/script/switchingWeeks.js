export   const arrWeeks = ["Mon", "Tue", "Wen", "Tuh", "Fri", "Sat", "Sun"];



function switchWeeks() {
    const arowsRight = document.querySelector('.navigate__arows_right');
    arowsRight.addEventListener('click', moveWeek);
    const arowsLeft = document.querySelector('.navigate__arows_left');
    arowsLeft.addEventListener('click', moveWeek);
    const buttonToday = document.querySelector('.navigate_today');
    buttonToday.addEventListener('click', moveWeek);

    function moveWeek() {

        const newWeek = [...arrWeeks];
        newWeek.map(dateOfDay => {
            const newDate = dateOfDay.getDate();
    
            dateOfDay = new Date(dateOfDay.setDate(newDate + 7));
            dateOfDay = new Date(dateOfDay.setDate(newDate - 7));

        });


        showWeek();
    };


};



export { switchWeeks };
