import BaseValidation from '../BaseValidation'

class AlphaNumeric extends BaseValidation {
  getDefaultErrorMessage(){
    return '%s must contain upper and lower case letters from A to Z and numbers only.'
  }

  evaluate(text, options){
    var extraChars = typeof options.extraChars === 'string' ? options.extraChars : ''
    return new RegExp(`^[A-Za-z0-9${extraChars}]*?$`).test(text)
  }
}

export default AlphaNumeric
