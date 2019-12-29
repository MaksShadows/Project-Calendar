export { getEvents, addEvent,  getEventById, deleteEvent,  setShowedMonday, getShowedMonday };



function getEvents() {
    return getItemLocalStorage('listEvents') || [];
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

function getEventById(idEvent) {
    return getEvents().find(({ id }) => id === idEvent);
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

function setShowedMonday(showedMonday) {
    updateLocalStorage('showedMonday', showedMonday);
};

function updateLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

function getShowedMonday() {
    if (getItemLocalStorage('showedMonday')) {
        return new Date(getItemLocalStorage('showedMonday'));
    }
    return getItemLocalStorage('showedMonday');
};


function getItemLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key), reviver);
};

function reviver(key, value) {
    if(['createDate', 'startDate', 'endDate'].includes(key)) {
        return new Date(value);
    }

    return value;
};