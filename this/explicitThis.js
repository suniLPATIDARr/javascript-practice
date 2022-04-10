//this time function not available in object 
// myName.call(person) here person is this 

const person = {
    name: 'Minal',
};
function myName() {
    console.log(this.name)
}
myName.call(person);