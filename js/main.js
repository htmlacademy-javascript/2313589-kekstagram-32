import {request, debounce} from './utilities.js';
import {renderStatus} from './status.js';
import {renderGallery} from './gallery/main.js';
import {setSubmitDisabled, ressetForm} from './upload/main.js';

const BASE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram/';

document.addEventListener('formdata', async (evt) => {
  try {
    setSubmitDisabled(true);
    await request(BASE_URL, {method: 'post', body: evt.formData});
    ressetForm();
    renderStatus('success');
  } catch {
    renderStatus('error');
  } finally {
    setSubmitDisabled(false);
  }
});

try {
  renderGallery(await request(`${BASE_URL}data`), debounce);
} catch {
  renderStatus('data-error', {autoHide: 5000});
}
