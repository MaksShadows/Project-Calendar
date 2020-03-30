import { setItem, getItem } from './storage.js';
import shmoment from './shmoment.js';


function renderEvent() {

  //const newEvents = [];

    const startEvent = getItem('displayedWeekStart');
     const endEvent = shmoment(startDateTime)
     const event = getItem('events') || [];

     setItem('events', [{
      id: 0.752, // id понадобится для работы с событиями
      title: 'Title',
      description: 'Event - description',
      start: new Date('2020-03-17T01:10:00.000Z'),
      end: new Date('2020-03-17T04:30:00.000Z'),
     }]);


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
  
  event.filter(event => {
    return event.start >= startEvent && event.end < endEvent;
  });
   event.forEach( event => {
    const { start } = event;
    const eventElem = createEventElement(event);

    const slotElem = document.querySelector(
     `.column-day[data-day="${start.getDate()}"] .column-day__item[data-time="${start.getHours()}"]`,
        );
        slotElem.append(eventElem);
   });
} ;



export { renderEvent}


// export const renderEvents = () => {
//   removeEventsFromCalendar();
//   const events = getItem('events') || [];
//   const startDateTime = getItem('displayedWeekStart');
//   const endDateTime = shmoment(startDateTime)
//       .add('days', 7)
//       .result();
//   events
//       .filter(event => {
//           return event.start >= startDateTime && event.end < endDateTime;
//       })
//       .forEach(event => {
//           const { start } = event;
//           const eventElem = createEventElement(event);
//           const slotElem = document.querySelector(
//               `.column-day[data-day="${start.getDate()}"] .column-day__item[data-time="${start.getHours()}"]`,
//           );
//           slotElem.append(eventElem);
//       });
// };