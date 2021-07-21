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

//Create a function that will return the middle-most element of an array.
// Arrays with 1-2 elements should return an empty array.
// Arrays with odds number of elements should return a single middle element.
// Arrays with and even numbers of elements should returns two elements in the middle.

const middle = function(array) {
  
  let output = [];
  

  if (array.length <= 2) { // check array length and return empty array if 2 or less.
    return output;
  } else if (array.length % 2 !== 0) {  // Check if odd number, if push middle element to output and return.
      let middleOdd = Math.ceil(array.length / 2 - 1)
      let middleOddElement = array[middleOdd];
      output.push(middleOddElement);
      return output;
    } else if (array.length % 2 === 0) {
        let middleEven = Math.ceil(array.length / 2 - 1)
        let middleEvenElement1 = array[middleEven]
        let middleEvenElement2 = array[middleEven + 1]
        output.push(middleEvenElement1, middleEvenElement2);
        return output;
    }

  

}

// TEST CODE
console.log(middle([1]));
console.log(middle([1, 2]));

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

