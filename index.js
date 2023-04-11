const express = require('express');
const routes = require('./routes/routes');
const app = express()
const port = 5000;


routes(app)
app.use(express.json())
// app.get('/', (req,res)=>{
// res.send('Hello World!');
// })



app.listen(port, ()=>console.log(`Listening at port ${port}`))

module.exports=  app;