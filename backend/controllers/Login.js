const mongoose = require('mongoose')
const Organisation = require('../models/Organisation')
const User = require('../models/User')


//Sample code on how to manage circular dependency in db while creating organisation using transaction(session)
async function createOrgAndUser(req,res){
    const session = await mongoose.startSession();
    session.startTransaction();
    try{
        const {orgName, description, orgpassword, userName, email, } = req.body;
        const org = await Organisation.create([{
            name: orgName
        }],{session});
        
        const user = await User.create([{
            name: userName,
            email: email,
            Organisation: org[0]._id
        }],{session})

        await Organisation.updateOne(
            {_id: org[0]._id},
            {createdBy: user[0]._id},
            {session}
        )
        await session.commitTransaction();
        session.endSession();
        res.status(201).json({organisation:org[0], user: user[0]})
    } catch(err){
        await session.abortTransaction();
        session.endSession();
        console.log(err)
        res.status(500).json({message: 'Creation Failed', error})
    }
}