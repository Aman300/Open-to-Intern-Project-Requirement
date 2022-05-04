import BaseValidation from '../BaseValidation'

class Alphabetic extends BaseValidation {
  getDefaultErrorMessage(){
    return '%s must contain upper and lower case letters from A to Z only.'
  }

  evaluate(text, options){
    var extraChars = typeof options.extraChars === 'string' ? options.extraChars : ''
    return new RegExp(`^[A-Za-z${extraChars}]*?$`).test(text)
  }
}

export default Alphabetic
