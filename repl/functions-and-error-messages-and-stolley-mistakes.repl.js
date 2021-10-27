typeof(7);
typeof(22.2);
typeof('pig');
typeof(false);
typeof(typeof(7));
function makeAdder(num) {
  // is num a number?
  if (typeof(num) !== 'number') {
      console.log('num must be a number', num);
      return;
    }
  return function(x) {
      if (typeof(x) !== 'number') {
          console.log('x must be a number', x);
          return;
        }
      return x + num;
    }
}
makeAdder('cow');
console.clear();
function makeAdder(num) {
  // is num a number?
  if (typeof(num) !== 'number') {
      console.log('num must be a number; you wrote "' + num + '"');
      return;
    }
  return function(x) {
      if (typeof(x) !== 'number') {
          console.log('x must be a number; you wrote "' + x + '"');
          return;
        }
      return x + num;
    }
}
makeAdder('dog');
var addThree = makeAdder('three');
addThree;
console.clear();
var addTwenty = makeAdder(20);
addTwenty(1);
addTwenty(10);
addTwenty('one-hundred thousand');
addTwenty('3');
addTwenty('33');
'33'.length;
'how long is this sentence anyway?'.length;
77.length;
typeof('string'.length);
typeof(77.length);
console.clear();
parseInt('33');
parseInt(33.3);
+"33";
+"-3"
3 + 3'
"3" + "3"
+"3"
typeof(+"33");
typeof(+33);
console.clear();
function makeAdder(num) {
  // is num a number?
  if (typeof(+num) !== 'number') {
      console.log('num must be a number; you wrote "' + num + '"');
      return;
    }
  return function(x) {
      if (typeof(+x) !== 'number') {
          console.log('x must be a number; you wrote "' + x + '"');
          return;
        }
      return x + num;
    }
}
makeAdder('cow');
makeAdder('cow');
+"cow";
console.clear();
function makeAdder(num) {
  // is num a number
  var num = +num;
  if (typeof(num) !== 'number' || isNaN(num)) {
      console.log('num must be a number; you wrote "' + num + '"');
      return;
    }
  return function(x) {
      var x = +x;
      if (typeof(x) !== 'number' || isNaN(x)) {
          console.log('x must be a number; you wrote "' + x + '"');
          return;
        }
      return x + num;
    }
}
makeAdder('cow');
console.clear();
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
      return x + num;
    }
}
makeAdder('cow');
console.clear();
var addTwelve = makeAdder('12');
addTwelve(22);
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
console.clear();
var addEighteen = makeAdder('18');
addEighteen(6);
addEighteen('6');
addEighteen('60');
console.clear();