var expect = require('chai').expect;
var validation = require('../../lib/validations/RegExPattern').default

describe('RegExPattern validation', function() {

  var instance = new validation({
    pattern: /^Hello World$/
  })



  it('should return true when the string matches the pattern', function() {
      var result = instance.test('Hello World')
      expect(result.isValid).to.equal(true);
  });

  it('should return false when the string does not match with the pattern', function() {
      var result = instance.test('hello world')
      expect(result.isValid).to.equal(false);
  });

  it('should trow an error when option.patern is not defined', function() {
      var instance = new validation({})
      var result = null
      try {
        instance.test('hello world')
      } catch (e) {
        result = e instanceof Error
      }
      expect(result).to.equal(true);
  });

  it('should trow an error when option.patern is not a RegExp object', function() {
      var instance = new validation({
        pattern: 'hello world'
      })
      var result = null
      try {
        instance.test('hello world')
      } catch (e) {
        result = e instanceof Error
      }
      expect(result).to.equal(true);
  });
});
