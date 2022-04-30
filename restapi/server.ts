import express, { Application, RequestHandler } from "express";
import cors from 'cors';
import bp from 'body-parser';
import promBundle from 'express-prom-bundle';
import api from "./api"; 

const app: Application = express();
const port = process.env.PORT || 5000;

//const db= require('./db/db')
const options: cors.CorsOptions = {
  origin: ['http://localhost:3000',' http://*.compute-1.amazonaws.com'] // NOSONAR
};

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

const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
    .then(() => {
        console.log('Conexion correcta a la BD')
    }).catch((err:any) => {
        console.log(err)
    })
