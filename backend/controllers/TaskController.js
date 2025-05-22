const Task = require("../models/Task");

exports.getTasks = async (req,res,next)=>{
    try{
        const {userID, orgID} = req.body;
        const tasks = await Task.find({
            orgID,
            $or:[
                { givenByUser: userID },
                { givenToUser: userID }
            ]
        })
        res.json({success: true, tasks});
    } catch (error){
        res.status(500).json({success: false, error})        
    }
}

exports.postTask = async (req,res,next)=>{
    try{
        const {orgID, givenByUser, givenToUser, taskName,checkpoints, endBy} = req.body;
        const task = new Task({orgID, givenByUser, givenToUser, taskName, checkpoints,endBy})
        await task.save()

        res.status(201).json({
            success: true,
            message: 'Task assigned successfully',
            task
        })
    } catch(error){
        res.status(500).json({
            success: false,
            error
        })
    }
}
exports.updateTask = async (req,res,next)=>{
    try{
        const {_id, orgID, givenByUser, givenToUser, taskName,checkpoints, endBy} = req.body;
        const task = await Task.findByIdAndUpdate(
            _id,
            {
                $set:{
                    orgID,
                    givenByUser,
                    givenToUser,
                    taskName,
                    checkpoints,
                    endBy
                }
            },
            {
                new: true
            }
        )

        res.status(200).json({
            success: true,
            message: 'Task updated successfully',
            task
        })
    } catch(error){
        res.status(500).json({
            success: false,
            error
        })
    }
}