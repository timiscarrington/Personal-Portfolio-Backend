const mongoose = require('mongoose');
const { MONGODB_URI } = process.env;

mongoose.set('strictQuery', true);
mongoose.connect(MONGODB_URI);

mongoose.connection.on('open', ()=> console.log ('you are connected to MONGODB'))
mongoose.connection.on('close', ()=> console.log ('you are disconnected to MONGODB'))
mongoose.connection.on('error', ()=> console.log (err))