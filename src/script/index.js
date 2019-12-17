import { addContentSidebar } from './createSidebar.js';
import { showPopupWindow } from './showPopupWindow.js';
import { createEvent } from './createEvent.js';
import { switchWeeks } from './switchingWeeks.js';
import { deleteObjectEvent } from './deleteEvent.js';

addContentSidebar();
showPopupWindow();
createEvent();
switchWeeks();
deleteObjectEvent();

window.addEventListener('storage');

