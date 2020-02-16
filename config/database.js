const mongoose = require('mongoose')


setupDB =()=>{
    mongoose.connect('mongodb://localhost:27017/oct-pgowner',{useUnifiedTopology:true,useNewUrlParser:true})
    .then(()=>{
        console.log('connected to db')
    })
}

module.exports = setupDB