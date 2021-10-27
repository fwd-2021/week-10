console.clear();
var person = {
name: 'Karl',
dog: 'Hank'
};
person.name;
person.dog;
function sayHi() {
console.log('Hi!');
}
sayHi();
sayHi();
sayHi();
function sayHi(name) {
console.log('Hi, ' + name + '!');
};











console.clear();
sayHi('Angela');
sayHi(person.name);
person;
sayHi(person.dog);
person;
function scopedPerson() {
var somePerson = {
  name: 'Kelly',
  dog: 'Fanny'
  };
console.log(somePerson.name + ' has a dog named ' + somePerson.dog);
};
scopedPerson();








person;








console.clear()
function sloppyScope() {
var tidy = true;
sloppy = true;
};
sloppyScope();
sloppy;