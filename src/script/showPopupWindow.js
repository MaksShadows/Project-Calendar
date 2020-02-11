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
    formFields.name.addEventListener('blur', validateValue);
    formFields.dateStart.addEventListener('blur', validateValue);
    formFields.dateEnd.addEventListener('blur', validateValue);
    formFields.timeStart.addEventListener('blur', validateValue);
    formFields.timeEnd.addEventListener('blur', validateValue);
    
};

function hendlerClick(event) {
    if (event.target.classList.contains('popup-alert') ||
        event.target.classList.contains('column-day')) {
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
  
    deleteButton.style.display = 'none';
  };

  function showEditPopup(event) {
    showPopup();
    deleteButton.style.display = 'inline';
  
    const { idEvent } = event.target.closest('.day-event').dataset;
    idEventPopup.dataset.idEvent = idEvent;
    

  
  }




export { showPopupWindow, showEditPopup };