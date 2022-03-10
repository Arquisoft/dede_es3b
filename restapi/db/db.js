const Console = require('console');
const mongoose = require('mongoose');
const uri = "mongodb+srv://DeDeportes3b:dedeportes2@aswdedeportes.9ukdb.mongodb.net/ASWDeDeportes?retryWrites=true&w=majority";


    mongoose.connect(uri)
      .then(() => Console.log("BASE DE DATOS CONECTADA"))
      .catch(e => Console.log(e))


//module.exports = connection;