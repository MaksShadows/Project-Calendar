
import { createSelectTime } from './createSelectTime.js';

const scheduleDays = document.querySelector('.days');
const navigateCreateButton = document.querySelector('.navigate_create');
const popupLayer = document.querySelector('.popup-alert');
const buttonClose = document.querySelector('.popup__btn-close');
const deleteButton = document.querySelector('.event__btn-delete');
const idEventPopup = document.querySelector('.popup');

const formFields = {
    name: document.querySelector('.event__name'),
    dateStart: document.querySelector('.event__date-start'),
    dateEnd: document.querySelector('.event__date-end'),
    timeStart: document.querySelector('.event__time-start'),
    timeEnd: document.querySelector('.event__time-end'),
    description: document.querySelector('.event__description'),
    color: document.querySelector('.event__color-picker'),
};

function showPopupWindow() {
    scheduleDays.addEventListener('click', hendlerClick);
    navigateCreateButton.addEventListener('click', showPopup);
    buttonClose.addEventListener('click', showPopup);
    popupLayer.addEventListener('click', hendlerClick);
 
};

function hendlerClick(event) {
    if (event.target.classList.contains('popup-alert') ||
        event.target.classList.contains('column-day')) {
        showPopup()
    }
};


function showPopup() {
    createSelectTime(formFields.timeStart, formFields.timeEnd);
    popupLayer.classList.toggle('display-none');

    if (!field.classList.contains('select')) {
        field.value = '';
    };

    deleteButton.style.display = 'none';
};

function showEditPopup(event) {
    showPopup();
    deleteButton.style.display = 'inline';

    const idEvent = event.target.closest('.day-event').dataset.idEvent;
    idEventPopup.dataset.idEvent = idEvent;

    

};



export { showPopupWindow, showEditPopup };