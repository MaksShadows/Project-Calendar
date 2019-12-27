


const formFields = {
    name: document.querySelector('.event__name'),
    dateStart: document.querySelector('.event__date-start'),
    dateEnd: document.querySelector('.event__date-end'),
    timeStart: document.querySelector('.event__time-start'),
    timeEnd: document.querySelector('.event__time-end'),
    description: document.querySelector('.event__description'),
};
const btnSave = document.querySelector('.event__btn-save');

function createEvent() {
    btnSave.addEventListener('click', createObjectEvent);
};

function createObjectEvent(event) {
    event.preventDefault();

const invalidFields = Object.values(formFields).find(field => {
  
    });

    if (invalidFields) return;

    
   
    document.querySelector('.popup-alert').classList.toggle('display-none');
};

export { createEvent };
