const express = require('express');
const {default:mongoose} = require('mongoose')
const cors = require('cors');
const TaskRouter = require('./routes/TaskRoutes');
const UserRouter = require('./routes/UserRoutes');
require('dotenv').config()

const DB_PATH = process.env.DB_URI
const PORT = process.env.PORT
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/ping",(req,res,next)=>{
    res.send("The server is working")
})
app.use('/task', TaskRouter)
app.use('/user', UserRouter)

mongoose.connect(DB_PATH).then(()=>{
    console.log("Connected to MongoDB via mongoose")
    app.listen(PORT,()=>{
        console.log(`server running on address http://localhost:${PORT}`)
    })
}).catch(err=>{
    console.log("Error Connecting to MongoDB", err);
})