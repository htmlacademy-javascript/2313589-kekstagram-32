import {request} from './utilities.js';
import {renderStatus} from './status.js';
import {renderGallery} from './gallery/main.js';
import './upload/main.js';

const baseUrl = 'https://32.javascript.htmlacademy.pro/kekstagram';
//https://32.javascript.htmlacademy.pro/kekstagram/data.
try {
  renderGallery(await request(`${baseUrl}/data`));
} catch {
  renderStatus('success', {autoHide: 5000});
}
