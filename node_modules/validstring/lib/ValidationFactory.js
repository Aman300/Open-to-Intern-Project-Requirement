'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseValidation = require('./BaseValidation');

var _BaseValidation2 = _interopRequireDefault(_BaseValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getObjectName(methodName) {
  return methodName.substring(0, 1).toUpperCase() + methodName.substring(1);
}

var ValidationFactory = function () {
  function ValidationFactory(validationsMap) {
    _classCallCheck(this, ValidationFactory);

    this.validationsMap = validationsMap.constructor.name === 'Object' ? validationsMap : {};
  }

  _createClass(ValidationFactory, [{
    key: 'spawn',
    value: function spawn(validationKey, baseValidation, options) {
      if (typeof validationKey !== 'string') {
        throw new Error('Unexpected "' + (typeof validationKey === 'undefined' ? 'undefined' : _typeof(validationKey)) + '" input, the first argument of .spawn() cannot be any other than a string.');
      } else if (!this.validationsMap[validationKey]) {
        throw new Error('Could not spawn a new instance of "' + getObjectName(validationKey) + '" as it is not available in the validations map. Check out the docs at: ');
      } else if (this.validationsMap[validationKey].__proto__ !== _BaseValidation2.default) {
        throw new Error('Will not spawn a new instance of "' + getObjectName(validationKey) + '" as it is not a valid validation.');
      }

      baseValidation = baseValidation instanceof _BaseValidation2.default ? baseValidation : false;

      return new this.validationsMap[validationKey](baseValidation, options || false);
    }
  }]);

  return ValidationFactory;
}();

exports.default = ValidationFactory;