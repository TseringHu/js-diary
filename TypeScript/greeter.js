"use strict";
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
// let user = {
//     firstName: 'Jane User',
//     lastName: 'Da Huang',
//     mi: 'sss'
// }
let user = new Student('Jane', 'mi', 'Huang');
console.log(user);
document.body.innerHTML = greeter(user);
console.log(greeter(user));
