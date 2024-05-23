  const express = require('express')
  const app = express()
 const userRouter = require('./routes/users-route')
  const bcrypt = require('bcrypt')
  const path = require('path')
  const cookieParser = require('cookie-parser');
  app.use(cookieParser());
  const config = require("./config/mongoose-connection")
  const jwt = require('jsonwebtoken')
  const usermodel = require('./models/user-model')
  
  app.use(express.json())
  app.use(express.urlencoded({extended:true}));
  app.use(express.static(path.join(__dirname,'public')))
 
 app.set("view engine","ejs")
 app.use("/",userRouter)
 
app.listen(process.env.PORT || 3000)
 

