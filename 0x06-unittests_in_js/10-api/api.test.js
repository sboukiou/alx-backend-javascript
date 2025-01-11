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

  it('should have the correct status code when :id is a number?', function (done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should have the correct status code when :id is NOT a number (=> 404)?', function (done) {
    request('http://localhost:7865/cart/hello', function (error, response) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  describe('/login', function () {
    it('should have the user login', function (done) {
      const options = {
        method: 'POST',
        url: 'http://localhost:7865/login',
        json: { userName: 'Betty' }
      };

      request(options, function (error, response, body) {
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });

  describe('/available_payments', function () {
    it('should have the available payment methods', function (done) {
      const options = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };

      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});
