const deleteButton = document.querySelector('.event__btn-delete');

function deleteObjectEvent() {
    deleteButton.addEventListener('click', deleteSelectedEvent);
};

function deleteSelectedEvent(event) {
    const idEvent = event.target.closest('.popup').dataset.idEvent;


    

    document.querySelector('.popup-alert').classList.toggle('display-none');
}


export { deleteObjectEvent };