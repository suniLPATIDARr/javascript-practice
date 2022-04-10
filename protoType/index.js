// prototype use for share properties and methods across instenses
function person(fName, lName) {
    // this={}
    this.firstName = fName;
    this.lastName = lName;
}
const person1 = new person('Minal', 'Patidar');
const person2 = new person('Sunil', 'Patidar');
person.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
}
console.log(person1.fullName());
console.log(person2.fullName());