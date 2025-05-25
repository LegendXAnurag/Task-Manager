const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        orgID:{
            type: mongoose.Types.ObjectId,
            required: false,
            ref: 'Organisation'
        },
        signInType:{
            type: String,
            enum: ['manual','google'],
            required: true
        },
        name:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true
        },
        role:{
            type: String,
            enum: ['Owner','Manager', 'Employee'],
            required: true
        },
        tasks:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }]
    },
    {
        timestamps: true
    }

)

module.exports = mongoose.model('User',UserSchema)