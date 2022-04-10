//this time function not available in object 
// myName.call(person) here person is this 
// When a function invoked with new keyword it creates a empty this for function it is calling

function Person(name) {
    // this={}
    this.name = name
}
const miss = new Person('Minal')
const mr = new Person('Sunil')

console.log(miss.name, ' weds ', mr.name)
console.log(typeof Person)
console.log(typeof miss)