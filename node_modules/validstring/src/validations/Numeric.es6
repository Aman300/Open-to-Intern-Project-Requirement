import BaseValidation from '../BaseValidation'

class Numeric extends BaseValidation {
  getDefaultErrorMessage(){
    return '%s must contain numbers only.'
  }

  evaluate(text, options){
    var extraChars = typeof options.extraChars === 'string' ? options.extraChars : ''
    return new RegExp(`^[0-9${extraChars}]*?$`).test(text)
  }
}

export default Numeric
