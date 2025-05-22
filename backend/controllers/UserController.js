const User = require("../models/User");

exports.getUser = async (req,res,next)=>{
    try{
        const {_id} = req.body;
        const user = await User.findById(_id, null, {
            populate: ['orgID', 'tasks']
        })
        res.status(200).json({success:true, user})
    } catch (error){
        res.status(500).json({success:false, error})
    }
}