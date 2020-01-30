export { getEvents, addEvent,  getEventById, deleteEvent,   };


export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key => JSON.parse(localStorage.getItem(key));

function getEvents() {
    return getItemStorage('listEvents') || [];
};


function getEventById(idEvent) {
    return getEvents().find(({ id }) => id === idEvent);
};

function addEvent(event) {
    const listEvents = getEvents();
    listEvents.push({
        id: event.id,
        name: event.name,
        createDate: new Date(),
        startDate: event.startDate,
        endDate: event.endDate,
        description: event.description,
        color: event.color,
    });
    updateLocalStorage('listEvents', listEvents)
};


function deleteEvent(idEvent) {
    const listEvents = getEvents();
    let indexEvent = undefined;
    listEvents.find(({ id }, index) => {
        if (id === idEvent) {
            indexEvent = index;
            return true;
        }
    });
    listEvents.splice(indexEvent, 1);

    updateLocalStorage('listEvents', listEvents)
};