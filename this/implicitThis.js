// Implicit binding rule say that when a function invoked with the dot notationm the object to the left 
// of the dot is what "this" keyword is referencing
// order of precedence new>explicit>implicit>default

const person = {
    name: 'Minal',
    myName: function () {
        console.log(this.name)
    }
};
person.myName();