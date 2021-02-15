import { handleCreateNote } from './controller.js';

document.body.addEventListener('dblclick', handleCreateNote);

// dasable right-click default menu to be able to enter note's editing mode
window.oncontextmenu = () => false;
