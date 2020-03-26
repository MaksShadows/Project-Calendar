export const createNumbersArray = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i);
    }

    return result;
};
  
export let today = new Date();

const getDays = () => {
    const result = [];
    createNumbersArray(0, 6).map(day => {

        const newDay = new Date(today);
        newDay.setDate(newDay.getDate() + day);
        result.push(`
            <div
                class="column-day"
                data-day="${new Date(newDay).getDate()}"
            >${getItem()}</div>
        `);
    });

    return result.join('');
}; 
export const getItem = () =>
            createNumbersArray(0,24)
            .map(daysColumn => `
                <div
                    class="column-day__item"
                    data-time="${daysColumn}"
                ></div>
            `).join('');
       

const getTime = () => createNumbersArray(1, 24)
.map(timeItem => `
    <div
        class="sidebar hour"
        data-line="${timeItem}"
    >${ timeItem  <= 10 ?
         `${timeItem}:00` :
         `${timeItem}:00`}</div>
    `).join('');

const Column = document.querySelector('.calendar__week');
export const addContentSidebar = () => {
    
    const time = getTime();
    const daysColumn = getDays();
    const timeSectors = createNumbersArray(1, 1)
        .map(lineTime => `
            <div
                class='sidebar hour'
                data-column-number ="${lineTime}"
            >${time}</div>
            <div
                class='calendar__week'
                data-column-number ="${lineTime}"
            >${daysColumn}</div>
        `).join('');
        
    Column.innerHTML = timeSectors;

};

