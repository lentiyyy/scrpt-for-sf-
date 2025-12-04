export const concatenateStrings = (str1, str2) => {
  return (str1 + str2).split(' ').join('')

};


export const getStringLength = (str) => {
  return str.length

};


export const getStringFromTemplate = (firstName, lastName) => {
  return `Hello, ${firstName} ${lastName}!`

};


export const getChar = (str, index) => {
  return str[index]


};


export const removeFirstOccurrences = (str, num) => {
  const index = str.indexOf(num);
  if (index === -1) return str;
  return str.slice(0, index) + str.slice(index + num.length)


};


//шестое задание я не понял как делать потом обязателньо разберусь 