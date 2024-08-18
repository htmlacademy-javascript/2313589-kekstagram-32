import {renderComments} from './comments.js';
import {isEscapeKey} from '../utilities.js';

const popup = document.querySelector('.big-picture');
const cancelButton = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    cancelButton.click();
  }
};

function showPopup() {
  popup.classList.remove('hidden');
  popup.scroll(0, 0);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

const hidePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const renderPopup = ({url, description, likes, comments}) => {
  popup.querySelector('.big-picture__img img').src = url;
  popup.querySelector('.big-picture__img img').alt = description;
  popup.querySelector('.social__caption').textContent = description;
  popup.querySelector('.likes-count').textContent = likes;
  renderComments(comments);
  showPopup();
};

cancelButton.addEventListener('click', () => hidePopup());

export {renderPopup};
