'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseValidation2 = require('../BaseValidation');

var _BaseValidation3 = _interopRequireDefault(_BaseValidation2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Has = function (_BaseValidation) {
  _inherits(Has, _BaseValidation);

  function Has() {
    _classCallCheck(this, Has);

    return _possibleConstructorReturn(this, (Has.__proto__ || Object.getPrototypeOf(Has)).apply(this, arguments));
  }

  _createClass(Has, [{
    key: 'getDefaultErrorMessage',
    value: function getDefaultErrorMessage(options) {
      if (!options.chars) {
        throw new Error('Unexpected "' + _typeof(options.chars) + '" input, options.chars is required, and cannot be any other than a string.');
      }
      return '%s must contain any of the following characters: ' + options.chars;
    }
  }, {
    key: 'evaluate',
    value: function evaluate(text, options) {
      options.chars = options.chars.replace(/([\[\]])/g, '\$1');
      return new RegExp('[' + options.chars + ']').test(text);
    }
  }]);

  return Has;
}(_BaseValidation3.default);

exports.default = Has;