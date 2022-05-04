var expect = require('chai').expect;
var validation = require('../../lib/validations/SafePassword').default

describe('SefePassword validation', function() {


  var instance = new validation()

  it('should return true when the string is at least 8 characters long and contains both letters and numbers', function() {
      var result = instance.test('testpass123')
      expect(result.isValid).to.equal(true);
  });

  it('should return false when the string is not 8 characters long', function() {
      var result = instance.test('test')
      expect(result.isValid).to.equal(false);
  });

  it('should return false when the string does not contain numbers', function() {
      var result = instance.test('testpass')
      expect(result.isValid).to.equal(false);
  });

  it('should return false when the string does not contain letters', function() {
      var result = instance.test('12345678')
      expect(result.isValid).to.equal(false);
  });
});
