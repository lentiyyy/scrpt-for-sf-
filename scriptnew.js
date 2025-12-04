
export const concatenateStrings = (str1, str2) => {
  const combined = str1 + str2;
  let result = '';
  for (let char of combined) {
    if (char !== ' ' && char !== '\t' && char !== '\n' && char !== '\r') {
      result += char;
    }
  }
  return result;
};


export const getStringLength = (str) => {
  return str.length;
};


export const getStringFromTemplate = (firstName, lastName) => {
  return `Hello, ${firstName} ${lastName}!`;
};


export const getChar = (str, index) => {
  if (index < 1 || index > str.length) return '';
  return str[index - 1];
};


export const removeFirstOccurrences = (str, num) => {
  const index = str.indexOf(num);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + num.length);
};


//шестое не понял как решать потом разберусь 