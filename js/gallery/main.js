import {renderThumbnails} from './thumbnails.js';
import {renderPopup} from './popup.js';

const renderGallery = (picturesData) => {
  renderThumbnails(picturesData);

  document.addEventListener('thumbnailSelect', (evt) => {
    renderPopup(evt.detail);
  });
};

export {renderGallery};
