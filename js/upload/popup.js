import {isEscapeKey} from '../utilities.js';

const popup = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('.img-upload__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !evt.target.type?.startsWith('text')) {
    cancelButton.click();
  }
};

const showPopup = () => {
  popup.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hidePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

cancelButton.addEventListener('click', () => hidePopup());

export {showPopup, hidePopup};
