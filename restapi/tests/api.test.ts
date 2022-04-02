require('dotenv').config()

import request, {Response} from 'supertest';
import express, { Application,RequestHandler } from 'express';
import * as http from 'http';
import bp from 'body-parser';
import cors from 'cors';
import api from '../api';
import { getMaxListeners } from 'process';

const {v4: uuidv4} = require("uuid");
let app:Application;
let server:http.Server;

const mongoose = require("mongoose");
const uri = "mongodb+srv://DeDeportes3b:dedeportes2@aswdedeportes.9ukdb.mongodb.net/DatabaseTest?retryWrites=true&w=majority";

beforeAll(async () => {

    app = express();
    const port: number = 5000;
    const options: cors.CorsOptions = {
        origin: ['http://localhost:3000']
    };
    app.use(cors(options));
    app.use(bp.json());
    app.use("/api", api)

    server = app.listen(port, ():void => {
        console.log('Restapi server for testing listening on '+ port);
    }).on("error",(error:Error)=>{
        console.error('Error occured: ' + error.message);
    });

    mongoose.connect(uri)
    .then(() => {
            console.log('Conexion correcta a la BD')
    }).catch((err:any) => {
        console.log(err)
    })
});

afterAll(async () => {
    server.close() //close the server
    mongoose.connection.close();
})

describe('users ', () => {
    /**
     * Test that we can list users without any error.
     */
     it('Can get all the users',async () => {
        const response:Response = await request(app).get("/api/users/list");
        expect(response.statusCode).toBe(200);
    });

});