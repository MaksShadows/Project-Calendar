

const deleteButton = document.querySelector('.event__btn-delete');

function deleteObjectEvent() {
    deleteButton.addEventListener('click', deleteSelectedEvent);
};


export { deleteObjectEvent };
