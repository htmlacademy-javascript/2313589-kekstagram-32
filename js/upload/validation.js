import '../../vendor/pristine/pristine.min.js';

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
  return words.length === new Set(words).size; //Set откидывает повторы.
}, 'Повторяющийся #-тэг', 1, true);

pristine.addValidator(form.hashtags, (text) => {
  const maxHashtags = 5;
  return split(text).length <= maxHashtags;
}, 'Слишком много #-тэг', 1, true);

pristine.addValidator(form.hashtags, (text) => {
  const maxHashtagLength = 20;
  return split(text).every((word) => word.length) <= maxHashtagLength;
}, 'Слишком длинный #-тэг', 1, true);
