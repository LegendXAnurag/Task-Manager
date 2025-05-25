const Organisation = require('../models/Organisation')
const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.getOrganization = async (req,res,next)=>{
    try{
        const orgs = await Organisation.find()
        res.status(200).json({success:true, organizations:orgs})
    } catch(error){
        res.status(500).json({success: false, error}) 
    }
}

exports.createOrganization = async (req,res,next)=>{
    try{
        const {userID, orgName, description, password} = req.body;
        const preExist = await Organisation.findOne({name: orgName});
        if(preExist){
            return res.status(409)
                .json({
                    message: "Organisation with same name already exists",
                    success: false
                })
        }
        const org = new Organisation({
            createdBy:userID,
            name: orgName,
            description,
            password
        })
        const salt = await bcrypt.genSalt(10);
        org.password = await bcrypt.hash(password,salt);
        await org.save();
        res.status(201).json({
            success: true,
            message: "Organisation created successfuly",
            organisation : org
        })
    }catch(error){
        res.status(500).json({success: false, error}) 
    }
}

exports.joinOrganisation = async (req,res,next)=>{
    try{
        const {orgID, userID, password} = req.body;
        const org = await Organisation.findById(orgID);
        const user = await User.findById(userID);
        if(!org || !user){
            res.status(403).json({
                success:false,
                error:{
                    message:"Organisation or User does not exists"
                }
            })
        }
        const isMatch = await bcrypt.compare(password,org.password)
        if(!isMatch){
            res.status(403).json({
                success:false,
                error:{
                    message:"Invalid Password"
                }
            })
        }
        user.orgID = orgID;
        await user.save();
        res.status(200).json({
            success: true,
            message: "Joined organisation successfuly",
            organisation: org
        })

    } catch(error){
        res.status(500).json({success: false, error}) 
    }
}