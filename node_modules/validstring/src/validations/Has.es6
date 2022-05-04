import BaseValidation from '../BaseValidation'

class Has extends BaseValidation {
  getDefaultErrorMessage(options) {
    if(!options.chars) {
      throw new Error(`Unexpected "${typeof options.chars}" input, options.chars is required, and cannot be any other than a string.`)
    }
    return '%s must contain any of the following characters: '+options.chars
  }

  evaluate(text, options){
    options.chars = options.chars.replace(/([\[\]])/g,'\$1')
    return new RegExp(`[${options.chars}]`).test(text)
  }
}

export default Has
