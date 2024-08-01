import {showPopup} from './popup.js';
import {getScale } from './scale.js';
import {checkValidity, resetValidity} from './validation.js';

const form = document.querySelector('.img-upload__form');
const preview = document.querySelector('.img-upload__preview img');

form.addEventListener('change', (evt) => {
  switch (evt.target.name) {
    case 'filename':
      showPopup();
      break;
    case 'scale':
      preview.style.transform = `scale(${getScale() / 100})`;
      break;
  }
});

form.addEventListener('submit', (evt) => {
  if (!checkValidity()) {
    evt.preventDefault();
  }
});

form.addEventListener('reset', () => {
  resetValidity();
});
