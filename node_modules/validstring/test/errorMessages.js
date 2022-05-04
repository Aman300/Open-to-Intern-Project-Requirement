var expect = require('chai').expect;
var validstring = require('../lib/index')

describe('test()#getErrorMessages', function() {

  var validator = new validstring().notEmpty().has({chars:'@'})

  it('should return an array with 2 messages when there are 2/2 validation errors', function() {
      var result = validator.test('').getErrorMessages('Test input')
      expect(result.length===2 && result instanceof Array).to.equal(true);
  });

  it('should return an array with 1 messages when there are 1/2 validation errors', function() {
      var result = validator.test('123').getErrorMessages('Test input')
      expect(result.length===1 && result instanceof Array).to.equal(true);
  });

  it('should return an array with 0 messages when there are 0/2 validation errors', function() {
      var result = validator.test('123@').getErrorMessages('Test input')
      expect(result.length===0 && result instanceof Array).to.equal(true);
  });

  it('should return raise an error whenever replacement is not a string', function() {
      var result = null
      try {
        validator.test('123@').getErrorMessages()
      } catch (e) {
        result = e instanceof Error
      }
      expect(result).to.equal(true);
  });

});

describe('ValidString#getErrorMessages', function() {

  var validator = new validstring().notEmpty().has({chars:'@'})

  it('should return an array with 2 messages when there are 2/2 validation errors', function() {
      var test = validator.test('')
      var result = validator.getErrorMessages('Test input')
      expect(result.length===2 && result instanceof Array).to.equal(true);
  });

  it('should return an array with 1 messages when there are 1/2 validation errors', function() {
      var test = validator.test('123')
      var result = validator.getErrorMessages('Test input')
      expect(result.length===1 && result instanceof Array).to.equal(true);
  });

  it('should return an array with 0 messages when there are 0/2 validation errors', function() {
      var test = validator.test('123@')
      var result = validator.getErrorMessages('Test input')
      expect(result.length===0 && result instanceof Array).to.equal(true);
  });

  it('should return raise an error whenever replacement is not a string', function() {
      var test = validator.test('123@')
      var result = null
      try {
        validator.getErrorMessages()
      } catch (e) {
        result = e instanceof Error
      }
      expect(result).to.equal(true);
  });

  it('should return raise an error whenever there was not test or assert', function() {
      var validator = new validstring().notEmpty().has({chars:'@'})
      var test = validator
      var result = null
      try {
        validator.getErrorMessages('test')
      } catch (e) {
        result = e instanceof Error
      }
      expect(result).to.equal(true);
  });



});
