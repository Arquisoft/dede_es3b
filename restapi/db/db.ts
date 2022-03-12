require('dotenv').config()
const mongoose = require('mongoose')

const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
    .then(() => {
            console.log('Conexion correcta a la BD')
    }).catch((err:any) => {
        console.log(err)
    })