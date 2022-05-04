import BaseValidation from '../BaseValidation'

class SafePassword extends BaseValidation {
  getDefaultErrorMessage(){
    return '%s must be at least 8 characters long and should contain both letters and numbers.'
  }

  evaluate(text){
    var longerThan8 = /.{8}/.test(text)
    var containsAlpha = /[A-Za-z]+/.test(text)
    var containsNum = /[0-9]+/.test(text)
    return longerThan8 && containsAlpha && containsNum
  }
}

export default SafePassword
