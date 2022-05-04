ValidString
=========
[![MIT license](https://img.shields.io/npm/l/validstring.svg?maxAge=2592000)](https://spdx.org/licenses/MIT)
[![npm](https://img.shields.io/npm/v/validstring.svg?maxAge=86325)](https://www.npmjs.com/package/validstring)
[![npm dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)]()
[![travis-ci](https://api.travis-ci.org/ranaharoni/validstring.svg?branch=master)](https://travis-ci.org/ranaharoni/validstring?branch=master)
[![Code Climate](https://codeclimate.com/github/ranaharoni/validstring/badges/gpa.svg)](https://codeclimate.com/github/ranaharoni/validstring)
[![Test Coverage](https://codeclimate.com/github/ranaharoni/validstring/badges/coverage.svg)](https://codeclimate.com/github/ranaharoni/validstring/coverage)
[![Issue Count](https://codeclimate.com/github/ranaharoni/validstring/badges/issue_count.svg)](https://codeclimate.com/github/ranaharoni/validstring)

A handy validation library for strings

## Installation

  `npm install validstring --save`

## Usage

```js
import ValidString from 'validstring'

var validator = new ValidString()
validator.alphaNumeric({extraChars: ' '}).notEmpty().test('Hello world').isValid
// Returns: true
```


In order to not force you to change your programming style, there are several ways to achieve the same results.
```js
import ValidString from 'validstring'

// Chained validation
var validator1 = new ValidString()
validator.alphaNumeric({extraChars: ' '}).notEmpty().test('Hello world').isValid
// Returns: true

// Constucted validation
var validator2 = new ValidString({
  notEmpty: null,
  alphaNumeric: {extraChars: ' '}
})
validator2.test('Hello world').isValid
// Returns: true

// Built validation
// Useful when the validation needs to be defined programmatically
var validator3 = new ValidString()
validator3.append('notEmpty').append('alphaNumeric', {extraChars: ' '}).test('Hello world').isValid
// Returns: true

// Bi-dimensional build validation
var validator4 = new ValidString()
validator4.appendMap({
  notEmpty: null,
  alphaNumeric: {extraChars: ' '}
}).test('Hello world').isValid
// Returns: true
```

> For simplicity reasons all the examples from now on will be shown using the `chainable style`, as shown in `validator1`


#### Check Validity
```js
var validator = new ValidString()
validator.numeric().test('John doe').isValid
// Returns: false
```
#### Assert validity
```js
var validator1 = new ValidString()
validator1.numeric().test('John doe').assert(false)
// Returns: true

var validator2 = new ValidString()
validator2.numeric().assert('John doe', false)
// Returns: true
```
> Note that: The `validator2` differs from `validator1` in the fact that it does not use the `.test(str)` method, but instead it uses the `.assert(str, bool)`, which will perform the test and assert the result, returning a **boolean** value.

#### Get error messages
```js
var validator1 = new ValidString()
validator.alphabetic().test('John 123').isValid
// Returns: false

validator1.getErrorMessages('Your name')
// Returns ['Your name must contain upper and lower case letters from A to Z only.']
```


## Validations
##### alphabetic

Is valid if the tested string has only characters from **A** to **Z** (or **a** to **z**)

**Default error message:** `'%s must contain upper and lower case letters from A to Z only.'`



###### Options

| Name         | Expected type  | Description                              | Example                                  |
| ------------ | -------------- | ---------------------------------------- | ---------------------------------------- |
| extraChars   | string         | Extends the range of characters accepted by this validation. | ` {extraChars: '-_$', ...} `             |
| errorMessage | string         | Sets a custom error message for this validation. Note that `%s` will be replaced by the name of the field or any text you define later on. | ` {errorMessage: '%s must have numbers', ...} ` |

---

##### alphaNumeric

Is valid if the tested string has only characters from **A** to **Z** (or **a** to **z**) and/or from **0** to **9**

**Default error message:** `'%s must contain upper and lower case letters from A to Z and numbers only.'`



###### Options

| Name         | Expected type | Description                              | Example                                  |
| ------------ | ------------- | ---------------------------------------- | ---------------------------------------- |
| extraChars   | string        | Extends the range of characters accepted by this validation. | ` {extraChars: '-_$', ...} `             |
| errorMessage | string        | Sets a custom error message for this validation. Note that `%s` will be replaced by the name of the field or any text you define later on. | ` {errorMessage: '%s must have numbers', ...} ` |

------

##### has

Is valid if the tested string contains any of the specified characters.

**Default error message:** `'%s must contain any of the following characters: ...'`



###### Options

| Name                 | Expected type | Description                              | Example                                  |
| -------------------- | ------------- | ---------------------------------------- | ---------------------------------------- |
| chars **`required`** | string        | Specifies the characters that should be present in the tested string. | ` {chars: '-_$', ...} `                  |
| errorMessage         | string        | Sets a custom error message for this validation. Note that `%s` will be replaced by the name of the field or any text you define later on. | ` {errorMessage: '%s must have numbers', ...} ` |

------

##### hasNot

Is valid if the tested string does not contain any of the specified characters.

**Default error message:** `'%s cannot contain any of the following characters: ...'`



###### Options

| Name                 | Expected type | Description                              | Example                                  |
| -------------------- | ------------- | ---------------------------------------- | ---------------------------------------- |
| chars **`required`** | string        | Specifies the characters that should not be present in the tested string. | ` {chars: '-_$', ...} `                  |
| errorMessage         | string        | Sets a custom error message for this validation. Note that `%s` will be replaced by the name of the field or any text you define later on. | ` {errorMessage: '%s must have numbers', ...} ` |

------

##### notEmpty

Is valid if the tested string has 1 or more characters

**Default error message:** `'%s must not be empty.'`



###### Options

| Name         | Expected type  | Description                              | Example                                  |
| ------------ | -------------- | ---------------------------------------- | ---------------------------------------- |
| errorMessage | string         | Sets a custom error message for this validation. Note that `%s` will be replaced by the name of the field or any text you define later on. | ` {errorMessage: '%s must have numbers', ...} ` |

---

##### numeric

Is valid if the tested string has only characters from **0** to **9**

**Default error message:** `'%s must contain numbers only.'`



###### Options

| Name         | Expected type | Description                              | Example                                  |
| ------------ | ------------- | ---------------------------------------- | ---------------------------------------- |
| extraChars   | string        | Extends the range of characters accepted by this validation. | ` {extraChars: '-_$', ...} `             |
| errorMessage | string        | Sets a custom error message for this validation. Note that `%s` will be replaced by the name of the field or any text you define later on. | ` {errorMessage: '%s must have numbers', ...} ` |

---

##### regExPattern

Is valid if the tested string based on a given regular expression pattern.

**Default error message:** `'%s is not valid.'`



###### Options

| Name                   | Expected type | Description                              | Example                                  |
| ---------------------- | ------------- | ---------------------------------------- | ---------------------------------------- |
| pattern **`required`** | RegExp        | Sets the pattern on which the string will be evaluated | `{pattern: /[0-9]{4}\s[A-Z]{3}/i, ...}`  |
| errorMessage           | string        | Sets a custom error message for this validation. Note that `%s` will be replaced by the name of the field or any text you define later on. | ` {errorMessage: '%s must have numbers', ...} ` |

---

##### safePassword

Is valid if the tested string is at least 8 characters long and contains both letters and numbers.

**Default error message:** `'%s must be at least 8 characters long and should contain both letters and numbers.'`



###### Options

| Name         | Expected type | Description                              | Example                                  |
| ------------ | ------------- | ---------------------------------------- | ---------------------------------------- |
| errorMessage | string        | Sets a custom error message for this validation. Note that `%s` will be replaced by the name of the field or any text you define later on. | ` {errorMessage: '%s must have numbers', ...} ` |

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
