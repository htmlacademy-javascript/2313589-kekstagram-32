const request = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
};

const getRandomItem = (items) => {
  const fraction = items.length * Math.random(); //получаем случайное значение в виде дроби
  const index = Math.floor(fraction); //округляем в меньшую сторону до целого числа
  return items[index];
};//Функция для получения случайного элемента массива

const getRandomInteger = (min, max) => {
  const fraction = (max - min) * Math.random() + min; //получаем значение не ниже минимального
  return Math.round(fraction); //возвращаем с округлением(включительно)
};//Функция для получения случайного целого в диапазоне

export {request, getRandomItem, getRandomInteger};
