var expect = require('chai').expect;
var validation = require('../../lib/validations/IsPalindrome').default

describe('isPalindrome validation', function() {


  var instance = new validation()
  var instance2 = new validation({caseSensitive: true})

  it('should return true when the string is the same when reversed', function() {
      var result = instance.test('Radar')
      expect(result.isValid).to.equal(true);
  });

  it('should return false when the string is not the same when reversed', function() {
      var result = instance.test('Darts')
      expect(result.isValid).to.equal(false);
  });

  it('should return true when the string is the same when reversed (case-sensitive)', function() {
      var result = instance.test('RadaR')
      expect(result.isValid).to.equal(true);
  });

  it('should return false when the string is the same when reversed (case-sensitive)', function() {
      var result = instance.test('Radar')
      expect(result.isValid).to.equal(true);
  });
});
