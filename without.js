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

// Function which will return a subset of a given array, removing unwanted elements.

const without = function(source, itemsToRemove) {
  let result = source.filter(item => !itemsToRemove.includes(item));
  return result;
};

console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2, 3], [1]));

// Test cases:

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);