const express = require('express')
const { getUser } = require('../controllers/UserController')
const UserRouter = express.Router()

UserRouter.get('/',getUser)

module.exports = UserRouter