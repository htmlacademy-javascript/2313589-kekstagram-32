import {showPopup} from './popup.js';
import {} from './scale.js';
import {checkValidity, resetValidity} from './validation.js';

const form = document.querySelector('.img-upload__form');

form.addEventListener('change', (evt) => {
  if (evt.target.name === 'filename') {
    showPopup();
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
