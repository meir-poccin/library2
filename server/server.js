const express = require('express');
const app = express();
const {sequelize} = require('sequelize');
const path = require('path')
const cors = require('cors');


//configuration/middleware
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));




app.listen(4005, ()=>{
  console.log('server running!')
})