const [scaleDownButton, display, scaleUpButton] = document.querySelectorAll('.scale__control');
const config = {min: 25, max: 100, step: 25, defaultValue: 100};

// установка масштаба
const setScale = (value) => {
  // мин и макс диапазон
  value = Math.max(value, config.min);
  value = Math.min(value, config.max);
  display.setAttribute('value', `${value}%`);
  // привязка к изображению
  display.dispatchEvent(new Event('change', {bubbles: true}));
};

// текущее значение масштаба
const getScale = () => Number.parseFloat(display.value);

// сброс значения по умолчанию
const resetScale = () => setScale(config.defaultValue);

// уменьшение масштаба
const scaleDown = () => setScale(getScale() - config.step);

// увеличение масштаба
const scaleUp = () => setScale(getScale() + config.step);

// кнопки управления масштабом
scaleDownButton.addEventListener('click', () => scaleDown());
scaleUpButton.addEventListener('click', () => scaleUp());

export {getScale, resetScale};
