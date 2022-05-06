const { default: mongoose } = require('mongoose')
const collegeModel = require('../models/collegeModel')
const internModel = require('../models/internModel')

//========================CREATE Intern ===================================

const createInterns = async (req, res) => {
  try{
    let data = req.body
    let arr = Object.keys(data)
    let Name = /^[a-zA-Z ]{2,45}$/.test(req.body.name);
    let Email = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(req.body.email)
    let Mobile = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(req.body.mobile) 
    let intern = await internModel.findOne({ email : req.body.email});
    let mobileNo = await internModel.findOne({ mobile : req.body.mobile});

    // if (data.name === undefined && data.email === undefined && data.mobile === undefined && data.collegeId === undefined) {
    //   return res.status(400).send({ status: false, message: "invalid request ! please provide details" })
    // } 
    if (arr.length == 0){
      return res.status(400).send({ status: false, message: "Invalid request. Please provide Details" })
    } else if(!data.name){
      return res.status(400).send({ status: false, massage: "Fill the name block" });
    }
    else if(!data.email){
    return res.status(400).send({ status: false, massage: "Email is required" });
   }
    else if(!data.mobile){
    return res.status(400).send({status:false, massage:"Enter 10digit moblie number"})
   }
    
    else if (Name == false)  {
      return res.status(400).send({status:false , message: "Please Enter valid name." })
    }
    
    else if (Email == false){
       return res.status(400).send({status:false , message: "Please Enter valid email." })
    }
    else if(intern) {
       return res.status(400).send({status: false, message: "email already exist!"})
    }
    
    else if (Mobile == false){
     return res.status(400).send({status:false , message: "Please Enter valid mobile number." })
    }
    else if(mobileNo) {
       return res.status(400).send({status: false, message: "mobile number already exist!"})
    }
  
    else if (mongoose.Types.ObjectId.isValid(data.collegeId) == false){
       return res.status(400).send({ staus: false, message: "College Id is Invalid" })
    }

    let Id = await collegeModel.findOne({ _id: data.collegeId ,isDeleted:false});

    if(!Id){res.status(404).send({ status: false, Error: "College does not exist!" });}
    else{
        let internCreated = await internModel.create(data);
        res.status(201).send({ status: true, data: internCreated});
    }
  }   catch (err) {
  res.status(500).send({  status: false , msg: "Server not responding", error: err.message });
}
};

module.exports ={
  createInterns
}