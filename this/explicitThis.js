//this time function not available in object 
// myName.call(person) here person is this 
// order of precedence new>explicit>implicit>default

const person = {
    name: 'Minal',
};
function myName() {
    console.log(this.name)
}
myName.call(person);