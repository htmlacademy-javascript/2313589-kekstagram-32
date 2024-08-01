import '../../vendor/nouislider/nouislider.css';
import '../../vendor/nouislider/nouislider.js';

const ranges = {
  none: [0, 100, 1],
  chrome: [0, 1, 0.1],
  sepia: [0, 1, 0.1],
  marvin: [0, 100, 1],
  phobos: [0, 3, 0.1],
  heat: [1, 3, 0.1]
};

const formatters = {
  none: () => '',
  chrome: (value) => `grayscale(${value})`,
  sepia: (value) => `sepia(${value})`,
  marvin: (value) => `invert(${value}%)`,
  phobos: (value) => `blur(${value}px)`,
  heat: (value) => `brightness(${value})`,
};

// опции для слайдера
const createOptions = (type) => {
  const [min, max, step] = ranges[type];
  return {
    range: {min, max},
    step,
    start: max,
    format: {from: String, to: formatters[type]},
    connect: 'lower'
  };
};

const placeholder = document.querySelector('.effect-level__slider');
const slider = noUiSlider.create(placeholder, createOptions('none'));

const setEffect = (type) => {
  slider.updateOptions(createOptions(type));
};

export {setEffect};
