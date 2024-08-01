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

// опции для слайдера
const createOptions = (type) => {
  const [min, max, step] = ranges[type];
  return {
    range: {min, max},
    step,
    start: max,
    connect: 'lower'
  };
};

const placeholder = document.querySelector('.effect-level__slider');
nouislider.create(placeholder, createOptions('none'));
