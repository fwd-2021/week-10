function doSomething(func, data) {
  func(data);
}
function sayHi(name) {
console.log('Hi, ' + name);
}
sayHi('Hank');
doSomething(sayHi, 'Ooooooh Fancy');
doSomething(sayHi, 'OK Looks Good');