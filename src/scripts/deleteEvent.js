import {  getEventById } from './storage.js';

const deleteButton = document.querySelector('.event__btn-delete');

function deleteObjectEvent() {
    deleteButton.addEventListener('click', deleteSelectedEvent);
};

function deleteSelectedEvent(event) {
    const idEvent = event.target.closest('.popup').dataset.idEvent;

    const selectedEvent = getEventById(+idEvent);

    if (selectedEvent.startDate - new Date() ) {
        alert('Вы не можете удалить событие раньше чем за 15 мин до начала!!!!');
        return;
    };

}

export { deleteObjectEvent };