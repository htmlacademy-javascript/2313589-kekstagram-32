import {renderFilters} from './filters.js';
import {renderThumbnails} from './thumbnails.js';
import {renderPopup} from './popup.js';

const renderGallery = (picturesData) => {
  renderFilters();
  renderThumbnails(picturesData);

  document.addEventListener('thumbnailSelect', (evt) => {
    renderPopup(evt.detail);
  });
};

export {renderGallery};
