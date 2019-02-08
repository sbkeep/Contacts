export const stripInvalidChars = number => {
  if (!number) return '';
  return number.replace(/[^0-9, +, \-, ., (, ), \s]/g,'');
};

export const cleanNumber = number => {
  const digits = number.match(/\d/g, '');

  if (!digits) return '';

  return '+' + digits.join('');
};
