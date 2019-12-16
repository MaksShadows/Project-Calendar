

function switchWeeks() {
    const arowsRight = document.querySelector('.navigate__arows_right');
    arowsRight.addEventListener('click', moveWeek);
    const arowsLeft = document.querySelector('.navigate__arows_left');
    arowsLeft.addEventListener('click', moveWeek);
    const buttonToday = document.querySelector('.navigate_today');
    buttonToday.addEventListener('click', moveWeek);

};


export { switchWeeks };