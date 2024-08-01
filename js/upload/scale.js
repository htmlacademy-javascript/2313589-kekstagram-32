const [ , display, ] = document.querySelectorAll('.scale__control');

// установка масштаба
const setScale = (value) => {
  display.value = `${value}%`;
};

// текущее значение масштаба
const getScale = () => Number.parseFloat(display.value);

export {setScale, getScale};
