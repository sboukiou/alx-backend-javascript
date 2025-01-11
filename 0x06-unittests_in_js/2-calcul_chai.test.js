const chai = require("chai");
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe("calculateNumber", function () {
  it("Test SUM", function () {
    const type = 'SUM';
    const exp = 6;
    const out = calculateNumber(type, 1.4, 4.5);
    expect(out).to.equal(exp);
  });
  it("Test SUBSTACT", function () {
    const type = 'SUBTRACT';
    const exp = -4;
    const out = calculateNumber(type, 1.4, 4.5);
    expect(out).to.equal(exp);
  });
  it("Test DIVIDE", function () {
    const type = 'DIVIDE';
    const exp = 0.2;
    const out = calculateNumber(type, 1.4, 4.5);
    expect(out).to.equal(exp);
  });
  it("Test DIVIDE", function () {
    const type = 'DIVIDE';
    const exp = 'Error';
    const out = calculateNumber(type, 1.4, 0);
    expect(out).to.equal(exp);
  });
});
