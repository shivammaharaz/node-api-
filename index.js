const express = require('express');
const app=express();
const cors= require('cors');
const data=require('./data.json');
const port= process.env.PORT || 3000
app.use(cors());
app.get('/',(req,resp)=>{
resp.send(data);
})
// app.get('/',(req,resp)=>{
//     resp.send(data)
// })
app.listen(port,()=>{
    console.log('listening on port 3000')
})