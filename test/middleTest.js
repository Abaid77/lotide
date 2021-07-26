const middle = require('../middle');
const assert = require('chai').assert;

describe("#Middle", () => {
  it("should return [3] with input of [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  })
  it("should return [3, 4] with input of [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })
});