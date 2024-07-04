const getRandomItem = (items) => {
  const fraction = items.length * Math.random(); //получаем случайное значение в виде дроби
  const index = Math.floor(fraction); //округляем в меньшую сторону до целого числа
  return items[index];
};

const getRandomInteger = (min, max) => {
  const fraction = (max - min) * Math.random() + min; //получаем значение не ниже минимального
  return Math.round(fraction); //возвращаем с округлением(включительно)
};

void(getRandomItem, getRandomInteger);
