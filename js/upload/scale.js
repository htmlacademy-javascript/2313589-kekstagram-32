const [scaleDownButton, display, scaleUpButton] = document.querySelectorAll('.scale__control');

// установка масштаба
const setScale = (value) => {
  // мин и макс диапазон
  value = Math.max(value, 25);
  value = Math.min(value, 100);
  display.value = `${value}%`;
  // привязка к изображению
  display.dispatchEvent(new Event('change', {bubbles: true}));
};

// текущее значение масштаба
const getScale = () => Number.parseFloat(display.value);

// уменьшение масштаба
const scaleDown = () => setScale(getScale() - 25);

// увеличение масштаба
const scaleUp = () => setScale(getScale() + 25);

// кнопки управления масштабом
scaleDownButton.addEventListener('click', () => scaleDown());
scaleUpButton.addEventListener('click', () => scaleUp());

export {getScale};
