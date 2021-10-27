function returnSomething(data) {
  return data;
}
returnSomething('Hello World');
returnSomething([1, 2, 3]);
var threeNumbers = returnSomething([1,2,3]);
threeNumbers;
console.log('Hi THere');
console.clear();
function doSomethingLater(data) {
  return function(data) {
      return 'I have some data: ' + data;
    }
}
var myLaterFunction = doSomethingLater('Andrew needs sleep');
typeof myLaterFunction;
myLaterFunction('Andrew REALLY needs sleep');
myLaterFunction();
console.clear();
function doSomethingLater(data) {
  return function() {
      return 'I have some data: ' + data;
    }
}
var myNewLaterFunction = doSomethingLater('Hank offers sleep lessons FOR CHEAP');
myNewLaterFunction();