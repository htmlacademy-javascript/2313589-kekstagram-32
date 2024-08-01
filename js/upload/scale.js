const [scaleDownButton, display, scaleUpButton] = document.querySelectorAll('.scale__control');

// установка масштаба
const setScale = (value) => {
  display.value = `${value}%`;
};

// текущее значение масштаба
const getScale = () => Number.parseFloat(display.value);

// уменьшение масштаба
const scaleDown = () => setScale(getScale() - 25);

// увеличение масштаба
const scaleUp = () => setScale(getScale() + 25);

scaleDownButton.addEventListener('click', () => scaleDown());
scaleUpButton.addEventListener('click', () => scaleUp());

export {setScale, getScale, scaleDown, scaleUp};
