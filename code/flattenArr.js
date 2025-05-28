const flattenArr = (arr) => {
  return arr.reduce((acc, item) => {
    console.log("acc", acc);
    return Array.isArray(item) ? [...acc, ...flattenArr(item)] : [...acc, item];
  }, []);
};
console.log("res", flattenArr([1, 2, [3, 6, [6, 8, 9]]]));

const nonRepeatedChar = (str) => {
  return Array.from(str).find(
    (item, index) => !str.slice(index + 1).includes(item)
  );
};
console.log(nonRepeatedChar("123457854321"));

const checkFrq = (str) => {
  const obj = {};
  for (val of str) {
    obj[val] = (obj[val] || 0) + 1;
  }
  return obj;
};
const res = checkFrq("anbdsabjhbasdfiashoHIGFAIOAIDSH");
console.log(res);
