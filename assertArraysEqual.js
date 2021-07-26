const eqArrays = require('./eqArrays')

const assertArraysEqual = function(actual, expected) {
  let test = eqArrays(actual, expected);
  if (test === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};



module.exports = assertArraysEqual;