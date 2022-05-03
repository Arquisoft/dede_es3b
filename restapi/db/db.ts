require("dotenv").config();
const mongoose = require('mongoose')

const uri = "mongodb+srv://DeDeportes3b:dedeportes2@aswdedeportes.9ukdb.mongodb.net/ASWDeDeportes?retryWrites=true&w=majority";

mongoose.connect(uri)
    .then(() => {
        console.log('Conexion correcta a la BD')
    }).catch((err:any) => {
        console.log(err)
    })