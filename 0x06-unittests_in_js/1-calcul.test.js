const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe("calculateNumber", function () {
  it("Test SUM", function () {
    const type = 'SUM';
    const exp = 6;
    const out = calculateNumber(type, 1.4, 4.5);
    assert.equal(exp, out);
  });
  it("Test SUBSTACT", function () {
    const type = 'SUBTRACT';
    const exp = -4;
    const out = calculateNumber(type, 1.4, 4.5);
    assert.equal(exp, out);
  });
  it("Test DIVIDE", function () {
    const type = 'DIVIDE';
    const exp = 0.2;
    const out = calculateNumber(type, 1.4, 4.5);
    assert.equal(exp, out);
  });
  it("Test DIVIDE", function () {
    const type = 'DIVIDE';
    const exp = 'Error';
    const out = calculateNumber(type, 1.4, 0);
    assert.equal(exp, out);
  });
});
