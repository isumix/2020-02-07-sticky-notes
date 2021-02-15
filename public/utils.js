
export const getRandomColor = () => `#${(0x1000000 + Math.random() * 0xffffff).toString(16).substr(1,6)}`;

export const isColorBright = (color) => {
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);

  return ((r * 0.299) + (g * 0.587) + (b * 0.114)) > 120; // 186
};

export const uuid = () => Date.now().toString(36) + Math.random().toString(36).slice(2);

export const apiCreateNote = async (props) => console.log('Create', props);
export const apiUpdateNote = async (id, props) => console.log('Update', id, props);
export const apiRemoveNote = async (id) => console.log('Remove', id);
