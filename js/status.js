const renderStatus = (type) => {
  const template = document.querySelector(`#${type}`);
  const status = template.content.querySelector(`.${type}`).cloneNode(true);

  status.addEventListener('click', (evt) => {
    if (evt.target.matches(`.${type}, .${type}__button`)) {
      status.remove();
    }
  });
  document.body.appened(status);
};

export {renderStatus};
