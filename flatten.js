const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(actual, expected) {
  let test = eqArrays(actual, expected);
  if (test === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = inputArray => {
  let output = [];
  for (let x of inputArray) {
    if (Array.isArray(x)) {
      for (let y of x) {
        output.push(y);
      }
    } else {
      output.push(x);
    }
  }
  return output;
};

assertArraysEqual(flatten([1, 2, [3, 4,], 5, [6]]), [1, 2, 3, 4, 5, 6]);

