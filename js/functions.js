//Функция для проверки длинны строки
const fitsLength = (text, maxLength) => text.length <= maxLength;

//Функция для проверки палиндромов
const isPalindrome = (sequence) => {
  const text = String(sequence).replaceAll(' ', '').toLowerCase();
  const reversedText = text.split('').reverse().join('');
  return text === reversedText;
};

//Функция для извлечения цифр от 0 до 9
const parseDigits = (sequence) => {
  const digits = String(sequence).replace(/[^0-9]+/g, '');
  return digits ? Number(digits) : NaN;
};

// Функция перевода часов в минуты
const getHoursInMinutes = (time) => {
  const [hours, minutes] = time.split(':');
  return Number(hours) * 60 + Number(minutes);
};

void (fitsLength, isPalindrome, parseDigits, getHoursInMinutes);
