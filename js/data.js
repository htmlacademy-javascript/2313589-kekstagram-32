import {getRandomItem, getRandomInteger} from './utilities.js';

const createCommentsData = (itemCount) => {
  const messages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
  const names = ['Эней', 'Альбус', 'Антоний', 'Аполлон', 'Аврелий', 'Брут', 'Кай', 'Каликс', 'Карину', 'Кассий', 'Киприан', 'Купидон', 'Деннис', 'Фавн', 'Феликс', 'Адриан', 'Жак', 'Юлий', 'Луций', 'Маркус', 'Марс'];

  return new Array(itemCount).fill(1).map((start, index) => ({
    id: start + index,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomItem(messages),
    name: getRandomItem(names)
  }));
};//#4

const createPicturesDate = (itemCount = 25) => {
  const descriptions = ['Фотография – это история, которую я не могу выразить словами','Когда слова станут неясными, я сосредоточусь на фотографиях','Когда изображения станут неадекватными, я буду доволен тишиной', 'Когда у меня в руках камера – я ничего не боюсь', 'Мы делаем фотографии, чтобы понять, что значит для нас наша жизнь'];

  return new Array(itemCount).fill(1).map((start, index) => ({
    id: start + index,
    url: `photos/${start + index}.jpg`,
    description: getRandomItem(descriptions),
    likes: getRandomInteger(15, 200),
    comments: createCommentsData(getRandomInteger(0, 30))
  }));
};//#4

export {createPicturesDate};
