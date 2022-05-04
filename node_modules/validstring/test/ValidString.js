
var expect = require('chai').expect;
var validstring = require('../lib/index')
var NotEmpty = require('../lib/validations/NotEmpty')

describe('ValidString', function() {

  it('should should append a validation when using a .appendMap()', function() {
      var validator = new validstring({notEmpty: true})
      expect(validator.validation.constructor.name).to.equal('NotEmpty');
  });

});
