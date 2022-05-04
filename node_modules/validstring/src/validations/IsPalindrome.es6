import BaseValidation from '../BaseValidation'

class IsPalindrome extends BaseValidation {
  getDefaultErrorMessage(){
    return '%s must be a palindrome.'
  }

  evaluate(text, options){
    if(!options.caseSensitive){
      text = text.toLowerCase();
    }
    return text === text.split('').reverse().join('')
  }
}

export default IsPalindrome
