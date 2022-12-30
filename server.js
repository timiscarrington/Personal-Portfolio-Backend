/////////////////////////////////////
////Dependencies///////////////////////
///////////////////////////////////////

//initialize .env variables
require('dotenv').config();

// pull PORT from .env, give defualt value of 4000 and establish DB connection
const { PORT } = process.env;
const cors= require('cors');
const morgan = require('morgan');

//import express
const express = require('express');
require('./config/db.connection')

const { projectControllers } = require ('./controllers');
const { restart } = require('nodemon');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/projects' , projectControllers)
app.use((err, req, res, next) => restart.status(500).send(err))

/////////////////////
///Routes////////////
////////////////////
//create test route
app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT} `))