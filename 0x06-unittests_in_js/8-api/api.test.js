const request = require('request');
const { expect } = require('chai');

describe('Index page', function () {
  it('should have the correct status code', function (done) {
    request('http://localhost:7865', function (error, response) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should have the correct result', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('other?', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(body).to.not.equal('Something else');
      done();
    });
  });
});
