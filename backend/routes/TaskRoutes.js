const express = require("express")
const { getTasks, postTask, updateTask } = require("../controllers/TaskController")
const TaskRouter = express.Router()

TaskRouter.get('/',getTasks);
TaskRouter.post('/assign',postTask);
TaskRouter.put('/edit', updateTask);


module.exports = TaskRouter