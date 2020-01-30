import { setItem, getItem } from './storage.js';


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

    const event = getItem('event') || [];
  


    const eventStartTime = new Date(formFields.dateStart.value + 'T' + formFields.timeStart.value);
    const eventEndTime = new Date(formFields.dateEnd.value + 'T' + formFields.timeEnd.value);


    newEvent.name = formFields.name.value;
    newEvent.startDate = eventStartTime;
    newEvent.endDate = eventEndTime;
    newEvent.description = formFields.descrip


    Object.values(formFields).map(elem => elem.value = '');
   
    document.querySelector('.popup-alert').classList.toggle('display-none');
};

export { createEvent };