const container = document.querySelector('.img-filters');

const selectFilter = (id) => {
  container.querySelectorAll('.img-filters__button').forEach((button) => {
    button.classList.toggle('img-filters__button--active', button.id === id);
  });
};

const onContainerClick = (evt) => {
  if (evt.target.matches('.img-filters__button')) {
    selectFilter(evt.target.id);
  }
};

const renderFilters = () => {
  container.classList.remove('img-filters--inactive');
  container.addEventListener('click', onContainerClick);
};

export {renderFilters, selectFilter};
