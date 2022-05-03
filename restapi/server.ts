import express, { Application, RequestHandler } from "express";
import cors from 'cors';
import bp from 'body-parser';
import promBundle from 'express-prom-bundle';
import api from "./api"; 

const app: Application = express();
const port = process.env.PORT || 5000;

//const db= require('./db/db')
// const options: cors.CorsOptions = {
//   origin: ['http://localhost:3000', /http:\/\/[ec2].+\.compute-1\.amazonaws\.com:3000/] // NOSONAR
// };

const metricsMiddleware:RequestHandler = promBundle({includeMethod: true});
app.use(metricsMiddleware);
app.use(cors());// NOSONAR
app.use(bp.json());

app.use("/api", api)

app.listen(port, ():void => {
    console.log('Restapi listening on '+ port);
}).on("error",(error:Error)=>{
    console.error('Error occured: ' + error.message);
});

require("dotenv").config();
const mongoose = require('mongoose')
//prueba
const uri = "mongodb+srv://DeDeportes3b:dedeportes2@aswdedeportes.9ukdb.mongodb.net/ASWDeDeportes?retryWrites=true&w=majority";

mongoose.connect(uri)
    .then(() => {
        console.log('Conexion correcta a la BD')
    }).catch((err:any) => {
        console.log(err)
    })
