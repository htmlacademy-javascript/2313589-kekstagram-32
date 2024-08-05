const renderStatus = (type) => {
  const template = document.querySelector(`#${type}`);
  const status = template.content.querySelector(`.${type}`).cloneNode(true);

  const onDocumentKeydown = (evt) => {
    if (evt.key.startsWith('Esc')) {
      status.click();
    }
  };

  status.addEventListener('click', (evt) => {
    if (evt.target.matches(`.${type}, .${type}__button`)) {
      status.remove();
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  });
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.appened(status);
};

export {renderStatus};
