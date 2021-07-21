const eqArrays = function(array1, array2) {
  // First check to see if the arrays are the same length. If not return false.
  if (array1.length !== array2.length) {
    return false;
  }
  // Make a loop that goes through each array and compares the 2 values at each index. If they do not match return false and end the loop.

  for(let i = 0; i < array1.length; i++) {
    if(array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
  
}
// Make a function that will console.log if an array is equal or not equal.
const assertArraysEqual = function(actual, expected) {
  // Run eqArrays on the data to get back a true or false value
  let test = eqArrays(actual, expected);
  // Next an if statement that will return a message based on true/false of the test
  if(test === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
  
  

}

assertArraysEqual([1, 2, 3], [1, 2, 3])