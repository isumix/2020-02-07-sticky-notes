import { createModel } from './model.js';
import {
  createTrashElement,
  createNoteElement,
  createNoteElementMoveHandler,
  getNoteElementId,
  getCenteredNoteXY,
  getNoteElementXY,
} from './view.js';
import { uuid, getRandomColor } from './utils.js';

const model = createModel('sticky-notes');
const trashElement = createTrashElement();

document.body.append(trashElement);

let isNoteDragged = false;
let isPointerOverTrash = false;
let isEditingNote = false;

const handleDragStart = ({ target, pageX, pageY }) => {
  isNoteDragged = true;

  target.classList.add('drag');
  target.style.pointerEvents = 'none'; // allow trash to register onmouse... events

  // move to foreground instead of using z-index
  document.body.append(target);

  document.onmousemove = createNoteElementMoveHandler(target, pageX, pageY);

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
    if (isPointerOverTrash) {
      trashElement.classList.remove('drag-over');
      target.classList.add('deleted');
      setInterval(() => target.remove(), 1000);
      model.remove(getNoteElementId(target));
    } else {
      target.classList.remove('drag');
      target.style.pointerEvents = 'auto';
      model.update(getNoteElementId(target), getNoteElementXY(target));
    }
    isNoteDragged = false;
  };
};

const handleEdit = ({ target }) => {
  isEditingNote = true;
  target.contentEditable = true;
  getSelection().selectAllChildren(target);
  target.onblur = () => {
    target.contentEditable = false;
    const text = target.textContent;
    target.innerHTML = text;
    model.update(getNoteElementId(target), { text });
    isEditingNote = false;
  };
};

const handleMouseDown = (event) => {
  if (isEditingNote) return;
  return event.button === 2 ? handleEdit(event) : handleDragStart(event);
}

export const handleCreateNote = ({ pageX, pageY }) => {
  if (isEditingNote) return;
  const noteProps = {
    id: uuid(),
    ...getCenteredNoteXY(pageX, pageY),
    bgcolor: getRandomColor(),
  };
  const noteElement = createNoteElement(noteProps);
  noteElement.onmousedown = handleMouseDown;
  document.body.append(noteElement);
  model.add(noteProps);
};

// load notes from storage to dom
document.body.append(...model.map((props) => {
  const noteElement = createNoteElement(props);
  noteElement.onmousedown = handleMouseDown;
  return noteElement;
}));

// Trash

trashElement.onmouseenter = ({ target }) => {
  isPointerOverTrash = true;
  if (isNoteDragged) target.classList.add('drag-over');
};

trashElement.onmouseleave = ({ target }) => {
  isPointerOverTrash = false;
  if (isNoteDragged) target.classList.remove('drag-over');
};
