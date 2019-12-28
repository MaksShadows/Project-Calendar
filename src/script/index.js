//import { addContentSidebar } from './createSidebar.js';
//import { showWeek } from './showWeek.js';
import { showPopupWindow } from './showPopupWindow.js';
import { createEvent } from './createEvent.js';
import { switchWeeks } from './switchingWeeks.js';
import { deleteObjectEvent } from './deleteEvent.js';

addContentSidebar();
showPopupWindow();
createEvent();
showWeek();
switchWeeks();
deleteObjectEvent();

window.addEventListener('storage');
