import '../../vendor/pristine/pristine.min.js';

const config = {maxHashtagLength: 20, maxHashtags: 5, maxDescriptionLength: 140};
const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const split = (text) => text.split(' ').filter(Boolean);

pristine.addValidator(form.hashtags, (text) => {
  const hashtagPattern = /^#[a-zа-яё0-9]+$/i;
  return split(text).every((word) => hashtagPattern.test(word));
}, 'Невалидный #-тэг', 1, true);

pristine.addValidator(form.hashtags, (text) => {
  const words = split(text.toLowerCase());
  return words.length === new Set(words).size;
}, 'Повторяющийся #-тэг', 1, true);

pristine.addValidator(form.hashtags, (text) => {
  const maxHashtags = config.maxHashtags;
  return split(text).length <= maxHashtags;
}, 'Слишком много #-тэгов', 1, true);

pristine.addValidator(form.hashtags, (text) => {
  const maxHashtagLength = config.maxHashtagLength;
  return split(text).every((word) => word.length <= maxHashtagLength);
}, 'Слишком длинный #-тэг', 1, true);

pristine.addValidator(form.description, (text) => {
  const maxDescriptionLength = config.maxDescriptionLength;
  return text.length <= maxDescriptionLength;
}, 'Слишком длинный комментарий', 1, true);

const checkValidity = () => pristine.validate();
const resetValidity = () => pristine.reset();

export {checkValidity, resetValidity};
