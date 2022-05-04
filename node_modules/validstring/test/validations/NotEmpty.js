var expect = require('chai').expect;
var validation = require('../../lib/validations/NotEmpty').default

describe('NotEmpty validation', function() {


  var instance = new validation()

  it("should return true when the string's length is more than 0 ", function() {
      var result = instance.test('test')
      expect(result.isValid).to.equal(true);
  });

  it("should return false when the string's length is 0 ", function() {
      var result = instance.test('')
      expect(result.isValid).to.equal(false);
  });
});
