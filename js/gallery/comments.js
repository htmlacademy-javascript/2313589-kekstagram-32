const container = document.querySelector('.social__comments');
const template = document.querySelector('.social__comment');
const shownCounter = document.querySelector('.social__comment-shown-count');
const totalCounter = document.querySelector('.social__comment-total-count');
const loaderButton = document.querySelector('.social__comments-loader');

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
  container.append(...createComments(data.splice(0, data.step)));
  shownCounter.textContent = container.childElementCount;
  loaderButton.classList.toggle('hidden', !data.length);
};

const renderComments = (commentsData, step = 5) => {
  data.splice(0, Infinity, ...commentsData);
  data.step = step;
  container.replaceChildren();
  totalCounter.textContent = commentsData.length;
  loaderButton.addEventListener('click', onLoaderButtonClick);
  loaderButton.click();
};

export {renderComments};
