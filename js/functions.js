const fitsLength = (text, maxLength) => text.length <= maxLength; //Функция для проверки длинны строки

const isPalindrome = (sequence) => {
  const text = String(sequence).replaceAll(' ', '').toLowerCase();
  const reversedText = text.split('').reverse().join('');
  return text === reversedText;
}; //Функция для проверки палиндромов

const parseDigits = (sequence) => {
  const digits = String(sequence).replace(/[^0-9]+/g, '');
  return digits ? Number(digits) : NaN;
}; //Функция для извлечения цифр от 0 до 9

void (fitsLength, isPalindrome, parseDigits);
