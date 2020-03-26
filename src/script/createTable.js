
export const createNumbersArray = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i);
    }

    return result;
};


const getDays = () => {
    const result = [];
    createNumbersArray(0, 6).map(day => {
        result.push(`
            <div
                class="column-day"
                data-day="${new Date().getDate()}"
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
       
            

const Column = document.querySelector('.calendar__week');
export const addContentSidebar = () => {
    
  
    const daysColumn = getDays();
    const timeSectors = createNumbersArray(1, 1)
        .map(lineTime => `
            <div
                class='calendar__week'
                data-column-number ="${lineTime}"
            >${daysColumn}</div>
        `).join('');
        
    Column.innerHTML = timeSectors;

};

