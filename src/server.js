const express= require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv')
const routesURLs=require('./routes/routes')

dotenv.config()

mongoose.connect(process.env.DB_URL,()=>console.log('database connected'))

app.use(express.json())
app.use(cors())

app.use('/app',routesURLs)

app.listen(4000,()=>console.log('serve at port 4000'))