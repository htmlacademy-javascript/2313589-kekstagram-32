const container = document.querySelector('.big-picture__social');
const templates = container.querySelector('.social__comments');
const template = container.querySelector('.social__comment');
const shownCounter = container.querySelector('.social__comment-shown-count');
const totalCounter = container.querySelector('.social__comment-total-count');
const loaderButton = container.querySelector('.social__comments-loader');

const createComments = (commentsData) => commentsData.map((properties) => {
  const {avatar, message, name} = properties;
  const comment = template.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
});

const data = [];
const onLoaderButtonClick = () => {
  templates.append(...createComments(data.splice(0, data.step)));
  shownCounter.textContent = templates.childElementCount;
  loaderButton.classList.toggle('hidden', !data.length);
};

const renderComments = (commentsData, step = 5) => {
  data.splice(0, Infinity, ...commentsData);
  data.step = step;
  templates.replaceChildren();
  totalCounter.textContent = commentsData.length;
  loaderButton.addEventListener('click', onLoaderButtonClick);
  loaderButton.click();
};

export {renderComments};
