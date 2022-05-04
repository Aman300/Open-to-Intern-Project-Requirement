var expect = require('chai').expect;
var validation = require('../../lib/validations/AlphaNumeric').default

describe('AlphaNumeric validation', function() {


  var instance = new validation({
    extraChars: '*'
  })

  it('should return true when the string contains letters or numbers', function() {
      var result = instance.test('test123')
      expect(result.isValid).to.equal(true);
  });

  it('should return true when the string contains extra characters', function() {
      var result = instance.test('**test**')
      expect(result.isValid).to.equal(true);
  });

  it('should return false when the string contains spaces', function() {
      var result = instance.test('test 123')
      expect(result.isValid).to.equal(false);
  });

  it('should return false when the string contains dashes', function() {
    var result = instance.test('test-123')
    expect(result.isValid).to.equal(false);
  });

});
