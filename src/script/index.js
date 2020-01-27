import { addContentSidebar } from './createSidebar.js';
import { showWeek, getCurWeekDates, getMonday } from './showWeek.js';
import { switchWeeks } from './switchingWeeks.js';
import { showPopupWindow } from './showPopupWindow.js';
import { createEvent } from './createEvent.js';
import { deleteObjectEvent } from './deleteEvent.js';

addContentSidebar();
showWeek(getCurWeekDates(getMonday()));
switchWeeks();
showPopupWindow();
createEvent();
deleteObjectEvent();

//window.addEventListener('storage', );