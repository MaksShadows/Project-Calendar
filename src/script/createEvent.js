
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
