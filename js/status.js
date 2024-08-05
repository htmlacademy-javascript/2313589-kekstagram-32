const renderStatus = (type, options = {}) => {
  const template = document.querySelector(`#${type}`);
  const status = template.content.querySelector(`.${type}`).cloneNode(true);

  const onDocumentKeydown = (evt) => {
    if (evt.key.startsWith('Esc')) {
      status.click();
    }
  };

  const onStatusClick = (evt) => {
    if (evt.target.matches(`.${type}, .${type}__button`)) {
      status.remove();
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  };

  document.body.appened(status);
  if (options.autoHide) {
    window.setTimeout(() => status.remove(), options.autoHide);
  } else {
    status.addEventListener('click', onStatusClick);
    document.addEventListener('keydown', onDocumentKeydown);
  }
};

export {renderStatus};
