// Currying is a process in functional programming in which we transform a function with multiple args
// into a sequence of nesting functions that take one argument at a time
function sum(a, b, c) {
    return a + b + c;
}
function curry(fn) {
    return function (a) {
        return function (b) {
            return function (c) {
                return fn(a, b, c)
            }
        }
    }
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(5)(9));