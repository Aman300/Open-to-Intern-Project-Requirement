var expect = require('chai').expect;
var validator = require('../lib/index')


describe('ValidString#alphabetic', function() {


  var instance = new validator().alphabetic({
    extraChars: '*'
  })

  it('should return true when the string contains letters', function() {
      var result = instance.test('test')
      expect(result.isValid).to.equal(true);
  });

  it('should return true when the string contains extra characters', function() {
      var result = instance.test('**test**')
      expect(result.isValid).to.equal(true);
  });

  it('should return false when the string contains numbers', function() {
      var result = instance.test('test123')
      expect(result.isValid).to.equal(false);
  });

  it('should return false when the string contains spaces', function() {
    var result = instance.test('test 123')
    expect(result.isValid).to.equal(false);
  });

});

describe('ValidString#alphaNumeric', function() {


  var instance = new validator().alphaNumeric({
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

describe('ValidString#has', function() {


  var instance = new validator().has({
    chars: '@'
  })

  it('should return true when the string contains a @', function() {
      var result = instance.test('test@example.com')
      expect(result.isValid).to.equal(true);
  });

  it('should return false when the string does not contain a @', function() {
      var result = instance.test('test')
      expect(result.isValid).to.equal(false);
  });
});

describe('ValidString#hasNot', function() {


  var instance = new validator().hasNot({
    chars: '@'
  })

  it('should return false when the string contains a @', function() {
      var result = instance.test('test@example.com')
      expect(result.isValid).to.equal(false);
  });

  it('should return true when the string does not contain a @', function() {
      var result = instance.test('test')
      expect(result.isValid).to.equal(true);
  });
});
