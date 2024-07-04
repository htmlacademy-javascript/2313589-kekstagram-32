const getRandomItem = (items) => {
  const fraction = items.length * Math.random(); //получаем случайное значение в виде дроби
  const index = Math.floor(fraction); //округляем в меньшую сторону до целого числа
  return items[index];
};

void(getRandomItem);
