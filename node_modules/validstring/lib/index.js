'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ValidationFactory = require('./ValidationFactory');

var _ValidationFactory2 = _interopRequireDefault(_ValidationFactory);

var _Has = require('./validations/Has');

var _Has2 = _interopRequireDefault(_Has);

var _HasNot = require('./validations/HasNot');

var _HasNot2 = _interopRequireDefault(_HasNot);

var _Numeric = require('./validations/Numeric');

var _Numeric2 = _interopRequireDefault(_Numeric);

var _NotEmpty = require('./validations/NotEmpty');

var _NotEmpty2 = _interopRequireDefault(_NotEmpty);

var _Alphabetic = require('./validations/Alphabetic');

var _Alphabetic2 = _interopRequireDefault(_Alphabetic);

var _AlphaNumeric = require('./validations/AlphaNumeric');

var _AlphaNumeric2 = _interopRequireDefault(_AlphaNumeric);

var _SafePassword = require('./validations/SafePassword');

var _SafePassword2 = _interopRequireDefault(_SafePassword);

var _RegExPattern = require('./validations/RegExPattern');

var _RegExPattern2 = _interopRequireDefault(_RegExPattern);

var _IsPalindrome = require('./validations/IsPalindrome');

var _IsPalindrome2 = _interopRequireDefault(_IsPalindrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var validationsMap = {
  'alphabetic': _Alphabetic2.default,
  'alphaNumeric': _AlphaNumeric2.default,
  'notEmpty': _NotEmpty2.default,
  'numeric': _Numeric2.default,
  'regExPattern': _RegExPattern2.default,
  'safePassword': _SafePassword2.default,
  'has': _Has2.default,
  'hasNot': _HasNot2.default,
  'isPalindrome': _IsPalindrome2.default
};

var factory = new _ValidationFactory2.default(validationsMap);

var ValidString = function () {
  function ValidString(validations) {
    var _this = this;

    _classCallCheck(this, ValidString);

    this.validation = null;

    if (validations) {
      this.appendMap(validations);
    }

    Object.defineProperties(this, {
      'hasValidations': {
        get: function get() {
          return _typeof(_this.validation) === "object";
        },
        set: function set() {}
      },
      'isTested': {
        get: function get() {
          return _this.validation ? _this.validation.tested : false;
        },
        set: function set() {}
      },
      'isValid': {
        get: function get() {
          return _this.validation ? _this.validation.isValid : null;
        },
        set: function set() {}
      },
      'isLastValid': {
        get: function get() {
          return _this.validation ? _this.validation.isThisValid : null;
        },
        set: function set() {}
      }
    });
  }

  _createClass(ValidString, [{
    key: 'append',
    value: function append(validationKey, options) {
      // Resets the validation property if new validations are added after a string has been tested on the same instance
      if (this.hasValidations && this.isTested) {
        console.warn('It is not recomended to add new validation specifications once you perform a .test() or assert().');
        this.validation = null;
      }
      this.validation = factory.spawn(validationKey, this.validation, options);
      return this;
    }
  }, {
    key: 'appendMap',
    value: function appendMap(obj) {
      if (!obj.constructor || obj.constructor.name !== 'Object') {
        throw new Error('Unexpected "' + obj + '" input, the argument of .appendMap() cannot be any other than an Object.');
      }

      for (var validationKey in obj) {
        this.append(validationKey, obj[validationKey]);
      }

      return this;
    }
  }, {
    key: 'getErrorMessages',
    value: function getErrorMessages(replacement) {
      if (!this.isTested) {
        throw new Error('Cannot get error messages for an untested validation, try running .test() or .assert() first.');
      }
      if (typeof replacement !== 'string') {
        throw new Error('Unexpected "' + (typeof replacement === 'undefined' ? 'undefined' : _typeof(replacement)) + '" input, the argument of .getErrorMessages() cannot be any other than a string.');
      }

      return this.validation.getErrorMessages(replacement);
    }
  }, {
    key: 'test',
    value: function test(text) {
      if (!this.hasValidations) {
        throw new Error('It is not possible to use .test() before defining the desired validations. Please refer to the manual for more info: ');
      }

      return this.validation.test(text);
    }
  }, {
    key: 'assert',
    value: function assert(text, assertion) {
      if (!this.hasValidations) {
        throw new Error('It is not possible to use .assert() before defining the desired validations. Please refer to the manual for more info: ');
      }

      return this.validation.assert(text, assertion);
    }

    //-------

  }, {
    key: 'alphabetic',
    value: function alphabetic(options) {
      return this.append('alphabetic', options);
    }
  }, {
    key: 'alphaNumeric',
    value: function alphaNumeric(options) {
      return this.append('alphaNumeric', options);
    }
  }, {
    key: 'notEmpty',
    value: function notEmpty(options) {
      return this.append('notEmpty', options);
    }
  }, {
    key: 'numeric',
    value: function numeric(options) {
      return this.append('numeric', options);
    }
  }, {
    key: 'regExPattern',
    value: function regExPattern(options) {
      return this.append('regExPattern', options);
    }
  }, {
    key: 'safePassword',
    value: function safePassword(options) {
      return this.append('safePassword', options);
    }
  }, {
    key: 'has',
    value: function has(options) {
      return this.append('has', options);
    }
  }, {
    key: 'hasNot',
    value: function hasNot(options) {
      return this.append('hasNot', options);
    }
  }, {
    key: 'isPalindrome',
    value: function isPalindrome(options) {
      return this.append('isPalindrome', options);
    }
  }]);

  return ValidString;
}();

module.exports = ValidString;