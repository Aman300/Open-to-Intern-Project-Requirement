import BaseValidation from '../BaseValidation'

class RegExPattern extends BaseValidation {
  getDefaultErrorMessage(){
    return '%s is not valid.'
  }

  evaluate(text, options){
    if(!(options.pattern instanceof RegExp)) {
      throw new Error(`Unexpected "${typeof options.pattern}" input, options.pattern is required, and cannot be any other than a RegExp instance.`)
    }
    return options.pattern.test(text)
  }
}

export default RegExPattern
