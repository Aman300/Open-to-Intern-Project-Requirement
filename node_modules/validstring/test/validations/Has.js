var expect = require('chai').expect;
var validation = require('../../lib/validations/Has').default

describe('Has validation', function() {


  var instance = new validation({
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

  it('should throw an error when option.chars is not a available', function() {
      var result = null
      try {
        new validation().test('hello world')
      } catch (e) {
        result = e instanceof Error
      }
      expect(result).to.equal(true);
  });
});
