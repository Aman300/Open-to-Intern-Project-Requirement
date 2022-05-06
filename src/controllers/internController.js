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

    if (arr.length == 0){
      return res.status(400).send({ status: false, message: "Invalid request. Please provide Details" })
    } else if(!data.name){
      return res.status(400).send({ status: false, massage: "Name is reqired" });
    }
    else if(!data.email){
    return res.status(400).send({ status: false, massage: "Email is required" });
   }
    else if(!data.mobile){
    return res.status(400).send({status:false, massage:"moblie number is required"})
   }

   else if(!data.collegeName){
    return res.status(400).send({status:false, massage:"college Name is required"})
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
  
    let getCllgData = await collegeModel.findOne({ name: data.collegeName}).select({ _id: 1 });
    if (!getCllgData) return res.status(404).send({ status: false, message: "Enter a valid college name" });
    data.collegeId = getCllgData._id;

    let showInterData = await internModel.create(data);
    res.status(201).send({ status: true, message: "Account created successfully", massage: showInterData });

  } catch (err) {
  res.status(500).send({  status: false , msg: "Server not responding", error: err.message });
}
};

module.exports ={ createInterns }