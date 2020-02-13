import { addContentSidebar } from './createSidebar.js';
import { showWeek, getCurWeekDates, getMonday } from './showWeek.js';
import { switchWeeks } from './switchingWeeks.js';
import { showPopupWindow } from './showPopupWindow.js';
import { eventHandler } from './createEvent.js';
import { deleteObjectEvent } from './deleteEvent.js';
import { renderRedLine } from './redLine.js';


addContentSidebar();
showWeek(getCurWeekDates(getMonday()));
switchWeeks();
showPopupWindow();
eventHandler();
deleteObjectEvent();
renderRedLine();

//window.addEventListener('storage', );
