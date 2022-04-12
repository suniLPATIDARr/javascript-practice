// closure is created when a child function keep the environment
//  of the parent scope even after the parent function has already executed 
// its basically a inner function with preserved value which is returned by outer function
function outer() {
    let counter = 0;
    function inner(a) {
        counter += a;
        console.log(counter);
    }
    return inner;
}
const getter = outer()
getter(12)
getter(10)