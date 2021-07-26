const eqArrays = require('./eqArrays')
const assertArraysEqual =require('./assertArraysEqual')

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
};

module.exports = middle;

