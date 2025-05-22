const express = require("express")
const { getTasks, postTask, updateTask } = require("../controllers/TaskController")
const TaskRouter = express.Router()

TaskRouter.get('/',getTasks);
TaskRouter.post('/',postTask);
TaskRouter.put('/', updateTask);


module.exports = TaskRouter