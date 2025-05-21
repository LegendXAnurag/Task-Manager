const mongoose = require('mongoose')

const OrgSchema = mongoose.Schema(
    {   
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: false
        },
        name:{
            type: String,
            required: true,
            unique: true
        },
        description:{
            type: String,
            required: true
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

module.exports = mongoose.model("Organisation",OrgSchema)