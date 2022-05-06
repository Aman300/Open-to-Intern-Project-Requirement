
const collegeModel = require('../models/collegeModel');
const internModel = require('../models/internModel')
const { default: mongoose } = require('mongoose')



const createColleges = async (req, res) => {
  try {

    let names = /^[a-zA-Z ]{2,30}$/.test(req.body.name)
    let fullName = req.body.fullName
    let logoLink = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*\.(?:png|jpg|jpeg))*$/.test(req.body.logoLink)
    
    let data = await collegeModel.findOne({name: req.body.name})

    if (req.body.name === undefined && req.body.fullName === undefined && req.body.logoLink === undefined) {
      return res.status(400).send({ status: false, message: "invalid request ! please provide details" })
    } 
      else if (!req.body.name) {
      res.status(400).send({ status: false, message: "Name is missing" })
    } 
      else if (!req.body.fullName) {
      res.status(400).send({ status: false, message: "fullName is missing" })
    } 
      else if (!req.body.logoLink) {
      res.status(400).send({ status: false, message: "LogoLink is missing" })
    } else if (names == false) {
      res.status(400).send({ status: false, message: "please inter valid name" })
    } 
      else if (fullName == 0) {
      res.status(400).send({ status: false, message: "please inter valid fullName" })
    } 
      else if (logoLink == false) {
      res.status(400).send({ status: false, message: "please inter valid link" })
    } 
      else if (!data) {
      let value = req.body
      let valueCreate = await collegeModel.create(value)
      res.status(201).send({ status: true, data: valueCreate })
    } 
      else if (data) {
      res.status(400).send({status: false, massage: "Name is alrady exist" })
    }
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
}

//===================================College DETAILS===================================
const collegeDetails = async (req, res) => {
  try{
    const info = req.query.collegeName
    //let getAllCollegeDetails = await internModel.find()
    if(!info){
      return res.status(200).send({status: false, massage: "college name is requred from query params"})
    }   

    if(Object.keys(info).length === 0) return res.status(400).send({status:false , message:"Please Enter College Name"})
    const college = await collegeModel.findOne({name: info ,isDeleted:false})
    if(!college) return res.status(400).send({status:false , message:"Did not found college with this name please register first"})
      const { name, fullName, logoLink } = college
      const data = { name, fullName, logoLink };
      data["interests"] = [];
      const collegeIdFromcollege = college._id;

      const internList = await internModel.find({ collegeId: collegeIdFromcollege  ,isDeleted:false});
      if (!internList) return res.status(404).send({ status: false, message: " We Did not Have Any Intern With This College" });
      data["interests"] = [...internList]
      res.status(200).send({ status: true, data: data });
}
catch(error){
  console.log({message:error.message})
  res.status(500).send({status:false , message:error.Message})
}
}

module.exports = { createColleges, collegeDetails  }