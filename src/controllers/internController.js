const { default: mongoose } = require('mongoose')
const collegeModel = require('../models/collegeModel')
const internModel = require('../models/internModel')

//========================CREATE Intern ===================================

const isValidObjectId = (ObjectId) => {
  return mongoose.Types.ObjectId.isValid(ObjectId);
};

const createInterns = async (req, res) => {
  try {

    let value = req.body

     //validating if the college's ObjectId is valid or not
     if(!isValidObjectId(value.collegeId))
     return res.status(404).send({ status: false, msg: "Enter a valid college Id" });

    let college = await collegeModel.findById(value.collegeId);    
    if (!college) {
      return res.status(404).send({ status: false, msg: "No such college Id  exist" });
    }
    
    let emailId = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(req.body.email)
    let mobiles = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(req.body.mobile)

    let arr = Object.keys(value)
    let emailCheck = await internModel.findOne({email: req.body.email})
    let mobileCheck = await internModel.findOne({mobile: req.body.mobile})
  
    if(arr.length == 0){
      return res.status(400).send({status: false, massage: "Invalid details please provid deatils" });
    } else if(!value.name){
      return res.status(400).send({status: false, massage: "Name is requred" });
    } else if(mobiles == false){
      return res.status(400).send({status: false, massage: "please enter valid 10 digite mobile number" });
    } else if(emailId == false){
      res.status(400).send({status: false, massage: "please Enter valid email"})
    } else if(!value.email){
      return res.status(400).send({status: false, massage: "Email is requred" });
    } else if(!value.collegeId){
      return res.status(400).send({status: false, massage: "collegeId is requred" });
    } else if(!emailCheck && !mobileCheck){
      let value = req.body
      let valueCreate = await internModel.create(value)
      res.status(200).send({status: true, data: valueCreate})
    } else if(emailCheck){
      res.status(400).send({status: false, massage: "Email is all ready exist"})
    } else if(mobileCheck)   {
      res.status(400).send({status: false, massage: "Moblie is all ready exist"})
    }
  } catch (err) {
    res.status(500).send({ status: false, error: err.message });
  }
}

module.exports ={
  createInterns
}