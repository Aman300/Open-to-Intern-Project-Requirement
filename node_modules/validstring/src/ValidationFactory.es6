import BaseValidation from './BaseValidation'

function getObjectName (methodName){
  return methodName.substring(0,1).toUpperCase()+methodName.substring(1)
}

class ValidationFactory {
  constructor(validationsMap) {
    this.validationsMap = validationsMap.constructor.name === 'Object' ? validationsMap : {}
  }

  spawn(validationKey, baseValidation, options) {
    if(typeof validationKey !== 'string') {
      throw new Error(`Unexpected "${typeof validationKey}" input, the first argument of .spawn() cannot be any other than a string.`)
    } else if(!this.validationsMap[validationKey]) {
      throw new Error(`Could not spawn a new instance of "${getObjectName(validationKey)}" as it is not available in the validations map. Check out the docs at: `)
    } else if(this.validationsMap[validationKey].__proto__ !== BaseValidation) {
      throw new Error(`Will not spawn a new instance of "${getObjectName(validationKey)}" as it is not a valid validation.`)
    }

    baseValidation = baseValidation instanceof BaseValidation ? baseValidation : false

    return new this.validationsMap[validationKey](baseValidation, options || false)
  }
}

export default ValidationFactory
