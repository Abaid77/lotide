const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns back 2 elements", () => {
    assert.equal(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it("ensures the first element returned is Lighthouse", () => {
    assert.equal(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
  });
  it("ensures the second element returned is Labs", () => {
    assert.equal(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
  });
  it("ensures the original array still has 3 elements", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.equal(words.length, 3);
  });


});