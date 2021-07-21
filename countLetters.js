const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }

};

// Create a function that counts the letters in a string and returns them as an object.

const countLetters = function(sentence) {
  const results = {};

  for (letter of sentence) {
    if (letter === " ") {
      } else {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
        }
    }
  }
  return results;
}
// TEST CASES

console.log(countLetters("hello"));