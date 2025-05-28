const generateRandomString = (len) => {
  let count = 65;
  const randomNumber = () => parseInt(Math.random() * 10, 10);
  const randomString = () => String.fromCharCode(count + randomNumber());
  let str = "";
  for (let i = 0; i < len; i++) {
    str += `${randomNumber()}${randomString()}`;
  }
  return str.slice(0, len);
};
console.log(generateRandomString(4));

const generateRandomString1 = (length) => {
  return Array.from({ length }, () => Math.random().toString(36)[2]).join("");
};
console.log(Math.random().toString(36));

console.log(generateRandomString1(10)); // Example: "8fjd93kdl1"
