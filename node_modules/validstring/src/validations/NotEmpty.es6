import BaseValidation from '../BaseValidation'

class NotEmpty extends BaseValidation {
  getDefaultErrorMessage(){
    return '%s must not be empty.'
  }
  
  evaluate(text){
    return /(?:\s|\S)+/.test(text)
  }
}

export default NotEmpty
