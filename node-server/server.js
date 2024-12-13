// server.js run to nodemon server00
const express = require('express'); 
const bodyParser = require('body-parser');
const cors = require('cors'); //strict-origin-when-cross-origin
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const morgan =require('morgan') // ดู method

const  connectMgoDB = require('./config/db')
connectMgoDB();

 //methond read routes 2
  
//methond read routes 3
const { readdirSync } = require( 'fs' ) 
const app = express();
const port = 4040; 
 
 
app.use(morgan('dev')); 
 
// Middleware
app.use(cors()); //strict-origin-when-cross-origin

app.use(bodyParser.json({ limit: '10mb' }))
 
 
 
// read all  end point path 
 
 

app.get('/',function(req,res,next ){
  res.json ({ msg : "Hello !!  folder 4040"})
});

 
  
 
readdirSync('./routes').map((r)=>app.use('/api',require('./routes/'+r))) 
 
  
/* get listen run server */
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
 