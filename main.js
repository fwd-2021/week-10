'use strict';

// SCREAMCASE           : constants
// SCREAMING_SNAKE_CASE : constants
// TitleCase            : classes
// camelCase            : functions
// --
// snake_case           : variables (values)

// var addTwo = function(2);

function makeAdder(num) {
  return function(x) {
    return x + num;
  }
}

function doSomething(func, data) {
  func(data);
}

function doSomethingLater(data) {
  return function() {
    return 'I have some data: ' + data;
  }
}

function returnSomething(data) {
  // Pure functions ALWAYS return data
  // and have no side effects
  return data;
}
