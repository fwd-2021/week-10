'use strict';

// SCREAMCASE           : constants
// SCREAMING_SNAKE_CASE : constants
// TitleCase            : classes
// camelCase            : functions
// --
// snake_case           : variables (values)

// var addTwo = function(2);

function makeAdder(num) {
  // is num a number
  var forcedNumber = +num;
  if (typeof(forcedNumber) !== 'number' || isNaN(forcedNumber)) {
    console.log('num must be a number; you wrote "' + num + '"');
    return;
  }
  return function(x) {
    var forcedX = +x;
    if (typeof(forcedX) !== 'number' || isNaN(forcedX)) {
      console.log('x must be a number; you wrote "' + x + '"');
      return;
    }
    return forcedX + forcedNumber;
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
