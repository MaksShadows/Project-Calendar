import { addContentSidebar } from './createSidebar.js';
import { showWeek, getCurWeekDates, getMonday } from './showWeek.js';
import { switchWeeks } from './switchingWeeks.js';
import { showPopupWindow } from './showPopupWindow.js';
import { eventHandler } from './createEvent.js';
import { deleteObjectEvent } from './deleteEvent.js';
import { renderRedLine } from './redLine.js';
import { renderEvent } from './renderEvent.js';

document.addEventListener('DOMContentLoaded', () => {
addContentSidebar();
showWeek(getCurWeekDates(getMonday()));
switchWeeks();
showPopupWindow();
eventHandler();
deleteObjectEvent();
renderRedLine();
renderEvent();
});

//window.addEventListener('storage', );
