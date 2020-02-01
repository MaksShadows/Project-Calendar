import { setItem, getItem } from './storage.js';


const btnSave = document.querySelector('.event__btn-save');

    const  eventHandler = event => {
    event.preventDefault();
 

    const events = getItem('events') || {};


    

    document.querySelector('.popup-alert').classList.toggle('display-none');
};
btnSave.addEventListener('click', eventHandler);

export { eventHandler };





