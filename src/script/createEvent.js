

const btnSave = document.querySelector('.event__btn-save');

    const  eventHandler = event => {
    event.preventDefault();
 

    let newEvent = {};


    

    document.querySelector('.popup-alert').classList.toggle('display-none');
};
btnSave.addEventListener('click', eventHandler);

export { eventHandler };





