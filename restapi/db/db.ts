import mongoose from 'mongoose';
//require('dotenv').config();

const uri = "mongodb+srv://DeDeportes3b:dedeportes2@aswdedeportes.9ukdb.mongodb.net/AWS?retryWrites=true&w=majority";

//const mongoString = process.env.DATABASE_URL;
mongoose.connect(uri);

const database = mongoose.connection;

database.once('open', (error: Error) => {
  console.log('Mongodb Connection stablished');
});

database.on('error', (error: Error) => {
  console.log('Mongodb connection error:', error);
  process.exit();
})


/*
const Console = require('console');
const mongoose = require('mongoose');
const uri = "mongodb+srv://DeDeportes3b:dedeportes2@aswdedeportes.9ukdb.mongodb.net/ASWDeDeportes?retryWrites=true&w=majority";


    mongoose.connect(uri)
      .then(() => Console.log("BASE DE DATOS CONECTADA"))
      .catch(e => Console.log(e))
      */

