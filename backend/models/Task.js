const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema(
    {
    orgID:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Organisation'
    },
    givenByUser:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    // Decide if one task can be given to only one user or multiple users
    givenToUser:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    taskName:{
        type: String,
        required: true
    },
    checkpoints:[{
        type: String,

    }]
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Task', TaskSchema);