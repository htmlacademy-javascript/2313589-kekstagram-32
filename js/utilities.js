const DELAY = 500;

const request = async (url, options) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

const debounce = (callback, timeoutDelay = DELAY) => {
  let timeoutId;

  return (...rest) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...rest), timeoutDelay);
  };
};

const isEscapeKey = (evt) => evt === 27;

export {request, debounce, isEscapeKey};
