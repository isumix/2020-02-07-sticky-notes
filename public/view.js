import { isColorBright } from './utils.js';

const MAX_WIDTH = 200;
const INIT_HEIGHT = 80;
const ID_KEY = 'STICKY_NOTE_ID'

export const createNoteElement = ({ id, x, y, bgcolor, text }) => {
  const element = document.createElement('div');
  element[ID_KEY] = id;
  element.className = 'sticky-note';
  element.style.maxWidth = `${MAX_WIDTH}px`;
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
  element.style.backgroundColor = bgcolor;
  element.style.color = isColorBright(bgcolor) ? 'black' : 'white';
  element.append(text === undefined ? 'Right-click to edit or drag to move' : text);
  return element;
};

export const createNoteElementMoveHandler = (target, pageX, pageY) => {
  const rect = target.getBoundingClientRect();
  const shiftX = pageX - rect.left + pageXOffset;
  const shiftY = pageY - rect.top + pageYOffset;
  return ({ pageX, pageY }) => {
    target.style.left = `${pageX - shiftX}px`;
    target.style.top = `${pageY - shiftY}px`;
  };
};

export const getNoteElementId = (element) => element[ID_KEY];

export const getCenteredNoteXY = (x, y) => ({
  x: x - MAX_WIDTH / 2,
  y: y - INIT_HEIGHT / 2,
});

export const getNoteElementXY = (element) => {
  const { x, y } = element.getBoundingClientRect();
  return { x, y };
};

// Trash

export const createTrashElement = () => {
  const element = document.createElement('div');
  element.className = 'trash-area';
  element.append('Trash');
  return element;
};
