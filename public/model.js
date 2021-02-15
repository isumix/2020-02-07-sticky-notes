import { apiCreateNote, apiUpdateNote, apiRemoveNote } from './utils.js';

export const createModel = id => {
  // todo await load from server and callback render
  let items = (s => s ? JSON.parse(s) : [])(localStorage.getItem(id));

  const store = () => localStorage.setItem(id, JSON.stringify(items));

  return {
    add (item) {
      const { id } = item;
      if (items.find(i => i.id === id)) throw new Error('not unique id');
      items = [...items, item];
      store();
      apiCreateNote(item); // todo handle errors and undo
    },

    update (id, item) {
      const curItem = items.find(i => i.id === id);
      const newItem = { ...curItem, ...item, id: curItem.id };

      // todo return if nothing changed

      // move updated item to the end of array to avoid using z-index
      items = [...items.filter(i => i.id !== id), newItem];

      store();
      apiUpdateNote(id, newItem); // todo handle errors and undo
    },

    remove (id) {
      items = items.filter(i => i.id !== id);
      store();
      apiRemoveNote(id); // todo handle errors and undo
    },

    map: (...a) => items.map(...a),
  };
};
