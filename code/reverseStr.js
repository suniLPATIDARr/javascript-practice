const reverseStr1 = (str) =>
  Array.from(str)
    .reduce((acc, item) => [item, ...acc])
    .join("");
const reverseStr2 = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};
const reverseStr = (str) => {
  return Array.from(str).reverse().join("");
};

console.log(reverseStr1("Minall"));
