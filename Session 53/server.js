const express= require("express");
const connectDB = require("./config");
const dotenv= require('dotenv').config();
const PORT= process.env.PORT | 5000;
const app = express();
connectDB();

app.use(express.json());//body parser
app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.use("/api/user",require('./routes/user_routes'))

app.listen(PORT,()=>{
    console.log(`Server is Running on ${PORT}`);
})