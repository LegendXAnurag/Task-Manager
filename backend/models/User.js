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
        }
    },
    {
        timestamps: true
    }

)

module.exports = mongoose.model('User',UserSchema)