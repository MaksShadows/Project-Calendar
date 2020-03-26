import { createSelectTime } from './createSelectTime.js';

const scheduleDays = document.querySelector('.calendar__week');
const navigateCreateButton = document.querySelector('.navigate_create');
const popupLayer = document.querySelector('.popup-alert');
const buttonClose = document.querySelector('.popup__btn-close');
const popup = document.querySelector('.popup');

const formFields = {
    name: document.querySelector('.event__name'),
    dateStart: document.querySelector('.event__date-start'),
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
    formFields.name.addEventListener('blur', validateValue);
    formFields.dateStart.addEventListener('blur', validateValue);
    formFields.timeStart.addEventListener('blur', validateValue);
    formFields.timeEnd.addEventListener('blur', validateValue);
    
};

function hendlerClick(event) {
    if (event.target.classList.contains('popup-alert') ||
        event.target.classList.contains('column-day__item'))  {
        showPopup()
    }
};
function validateValue(event) {
    if (!event.target.value) {
      event.target.classList.add('invalid');
      return;
    }
    event.target.classList.remove('invalid');
  }


  function showPopup() {
    //createSelectTime(formFields.timeStart, formFields.timeEnd);

    popupLayer.classList.toggle('display-none');
  
    popup.dataset.idEvent = '';
    Object.values(formFields).map((field) => {
      field.classList.remove('invalid');
      field.value = '';
  
      if (field.classList.contains('event__color-picker')) {
        field.value = '#4183f1';
      }
  
      return field;
    });
  
  };

 



export { showPopupWindow };