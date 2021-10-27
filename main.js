'use strict';

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
