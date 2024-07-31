import {showPopup} from './popup';
import './validation.js';

const form = document.querySelector('.img-upload__form');

form.addEventListener('change', (evt) => {
  if (evt.target.name === 'filename') {
    showPopup();
  }
});
