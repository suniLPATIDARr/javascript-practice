let a = 'a'
let b = 'A'
if (a < b) { // true
    console.log(a + ' is less than ' + b)
} else if (a > b) {
    console.log(a.charCodeAt(0) + ' is greater than ' + b.charCodeAt(0))
} else {
    console.log(a + ' and ' + b + ' are equal.')
}
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
console.log(p);