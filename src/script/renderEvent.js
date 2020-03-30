
function renderEvent(event) {

  //const newEvents = [];

      event.map(({title, eventDescription, eventTimeStart, entTimeEnd}) => {

     const eventNew = document.createElement('div');
     eventNew.classList.add('day-event');
     eventNew.setAttribute('data-id-event', `${id}`);
     
     //eventNew = document.querySelector(`div[data-time = "${ }"]`);

     const eventTime = document.createElement('div');
     eventTime.append(`${new Date(eventTimeStart)} - ${new Date(entTimeEnd)}`);

      eventNew.append(eventTime );
     
     eventNew.innerHTML = `${title}`;
     eventNew.innerHTML = `${eventTime}`;
     eventNew.innerHTML = `${eventDescription}`;

  });

} ;


export { renderEvent}
