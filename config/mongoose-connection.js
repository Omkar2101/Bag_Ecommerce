const mongoose = require('mongoose')
const config = require('config')
require('dotenv').config();
const dbgr =require('debug')("developement:debug")


mongoose.connect(`${config.get("MONGODB_URI")}/bag_store`)
.then(function(){
    dbgr("connected");
})
.catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection;