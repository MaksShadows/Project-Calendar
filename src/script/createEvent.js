const btnSave = document.querySelector('.event__btn-save');

const eventHandler = (event) => {
     event.preventDefault();
     const popup = document.querySelector('.popup');
     const formData = [...new FormData(popup)].reduce((acc, [field, value]) => ({ ...acc, [field]: value }), {})

     const eventTitle = document.querySelector('.event__name');
     const eventDate = document.querySelector('.event__date-start');
     const eventstartTime = document.querySelector('.event__time-start');
     const eventendTime = document.querySelector('.event__time-end ');
     const eventDescription = document.querySelector('.event__description');

     alert(JSON.stringify(formData));
     document.querySelector('.popup-alert').classList.toggle('display-none');
   };
   
btnSave.addEventListener('click', eventHandler);

export { eventHandler };