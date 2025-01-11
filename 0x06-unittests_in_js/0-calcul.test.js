const assert = require("assert");
require('./0-calcul.js');


describe("calculateNumber", function () {
  it("all integers", function () {
    const exp = 4;
    const out = calculateNumber(1, 3);
    assert.equal(exp, out);
  });
  it("Float number and integer", function () {

    const exp = 5;
    const out = calculateNumber(1, 3.7);
    assert.equal(exp, out);
  });
  it("Two floating numbers 1", function () {
    const exp = 5;
    const out = calculateNumber(1.2, 3.7);
    assert.equal(exp, out);
  });
  it("Two floating numbers 2", function () {
    const exp = 6;
    const out = calculateNumber(1.5, 3.7);
    assert.equal(exp, out);
  });
});
