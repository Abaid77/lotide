const eqArrays = function(array1, array2) {
  // First check to see if the arrays are the same length. If not return false.
  if (array1.length !== array2.length) {
    return false;
  }
  // Make a loop that goes through each array and compares the 2 values at each index. If they do not match return false and end the loop.

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
  
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const keyName of Object.keys(object1)) {
    if (Array.isArray(object1[keyName]) && Array.isArray(object2[keyName])) {
      if (!eqArrays(object1[keyName], object2[keyName])) {
        return false;
      }
    } else if (object1[keyName][0] !== object2[keyName][0]) {
      return false;
    } else if (object1[keyName][1] !== object2[keyName][1]) {
      return false;
    }
  }
  
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  let test = eqObjects(actual, expected);
  const inspect = require('util').inspect;
  if (test === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
  

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba) // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false