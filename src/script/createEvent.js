//import { setItem, getItem } from './storage.js';



const formFields = {
    name: document.querySelector('.event__name'),
    dateStart: document.querySelector('.event__date-start'),
    dateEnd: document.querySelector('.event__date-end'),
    timeStart: document.querySelector('.event__time-start'),
    timeEnd: document.querySelector('.event__time-end'),
    description: document.querySelector('.event__description'),
    color: document.querySelector('.event__color-picker'),
};


const btnSave = document.querySelector('.event__btn-save');

function createEvent() {
    btnSave.addEventListener('click', createObjectEvent);
};

function createObjectEvent(event) {
    event.preventDefault();

    const invalidFields = Object.values(formFields).find(field => {
        if (!field.classList.contains('event__description') &&
            !field.classList.contains('event__color-picker') &&
            !field.value) {
            field.classList.add('invalid');
            return true;
        }
    });
    if (invalidFields) return;


    document.querySelector('.popup-alert').classList.toggle('display-none');
};
export { createEvent };



