
var expect = require('chai').expect;
var validation = require('../lib/BaseValidation').default

describe('BaseValidation', function() {

  it('should not have a validation appended', function() {
      var validator = new validation()
      expect(!validator.validation).to.equal(true);
  });

  it('should have a base validation', function() {
      var validator = new validation(new validation())
      expect(validator.baseValidation.constructor.name).to.equal('BaseValidation');
  });

  it('should change the errorMessage using setErrorMessage({errorMessage:...})', function() {
      var validator = new validation()
      var errorMessage = 'This is a test error message'
      validator.setErrorMessage({errorMessage: errorMessage})
      expect(validator.errorMessage).to.equal(errorMessage);
  });

  it('should change the errorMessage using options.errorMessage', function() {
    var errorMessage = 'This is a test error message'
      var validator = new validation({errorMessage: errorMessage})
      expect(validator.errorMessage).to.equal(errorMessage);
  });

  it('should change the errorMessage using a string argument', function() {
      var validator = new validation()
      var errorMessage = 'This is a test error message'
      validator.setErrorMessage(errorMessage)
      expect(validator.errorMessage).to.equal(errorMessage);
  });

  it('should throw an error for not using a string in options.errorMessage', function() {
      var validator = new validation()
      var error = null
      try {
        validator.setErrorMessage({errorMessage: 123})
      } catch (e) {
        error = e
      }
      expect(error instanceof Error).to.equal(true);
  });

  it('should throw an error for not using a string or an object as the argument', function() {
      var validator = new validation()
      var error = null
      try {
        validator.setErrorMessage(123)
      } catch (e) {
        error = e
      }
      expect(error instanceof Error).to.equal(true);
  });

  it('should throw an error for trying to getGetErrorMessages on an untested validation', function() {
      var validator = new validation()
      var error = null
      try {
        validator.getErrorMessages('')
      } catch (e) {
        error = e
      }
      expect(error instanceof Error).to.equal(true);
  });

  it('should throw an error for trying to test with somethin other than a string as an argument', function() {
      var validator = new validation()
      var error = null
      try {
        validator.test(function(){})
      } catch (e) {
        error = e
      }
      expect(error instanceof Error).to.equal(true);
  });

  it('should return true as a false is asserted', function() {
      var validator = new validation()
      validator.evaluate = function evaluate(text) { return text.length > 5; }
      expect(validator.test('Hello').assert(false)).to.equal(true);
  });

  it('should throw an error due to wrong type on arg 1', function() {
      var validator = new validation()
      var error = null
      try {
        validator.assert(function(){})
      } catch (e) {
        error = e
      }
      expect(error instanceof Error).to.equal(true);
  });

  it('should throw an error due to wrong type on arg 2', function() {
      var validator = new validation()
      var error = null
      try {
        validator.assert('dasd', function(){})
      } catch (e) {
        error = e
      }
      expect(error instanceof Error).to.equal(true);
  });

});
