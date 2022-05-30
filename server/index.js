const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')


const cors = require('cors')
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://user123:14121502@cluster0.svuoa.mongodb.net/merntutorial?retryWrites=true&w=majority")




app.listen(3002,()=>{
    console.log("Server is running on port 3002")
})


 

app.get('/getUsers', (req,res)=>{
    UserModel.find({},(err,result)=>{
        if(err){
            res.json(err)
        } else {
            res.json(result)
        }
    })
})

app.post('/createUser', async (req,res)=>{
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
})