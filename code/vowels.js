const countVowels = (str) => {
  let count = 0;
  const vovels = ["a", "e", "i", "o", "u"];
  for (val of str) {
    vovels.includes(val.toLowerCase()) && count++;
  }
  return count;
};

const countVowels1 = (str) =>
  str
    .split("")
    .reduce((acc, char) => ("aeiouAEIOU".includes(char) ? acc + 1 : acc), 0);

console.log(countVowels("JavaScript"));

countVowels1("sunil");
