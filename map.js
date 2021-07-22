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
// Make a function that will console.log if an array is equal or not equal.
const assertArraysEqual = function(actual, expected) {
  // Run eqArrays on the data to get back a true or false value
  let test = eqArrays(actual, expected);
  // Next an if statement that will return a message based on true/false of the test
  if (test === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["stick", "glove", "puck", "helmet", "net"];
const words3 = ["1", "2", "3", "4", "5"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);



assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 's', 'g', 'p', 'h', 'n' ]);
assertArraysEqual(results3, [ '1', '2', '3', '4', '5' ]);