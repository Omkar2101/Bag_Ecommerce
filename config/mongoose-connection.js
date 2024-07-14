const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0/bag_store')
.then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.connection;