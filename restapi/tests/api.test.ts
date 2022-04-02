require('dotenv').config()

import request, {Response} from 'supertest';
import express, { Application,RequestHandler } from 'express';
import * as http from 'http';
import bp from 'body-parser';
import cors from 'cors';
import api from '../api';


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

    /**
     * Test that a user can be created through the productService without throwing any errors.
     */
    it('Can insert an user correctly', async () => {
        let dni:string = await uuidv4()
        let name:string = 'Pepe'
        let surname:string = 'Gonzalez'
        let email:string = 'pepegonzalez@gmail.com'
        const response:Response = await request(app).post('/api/users/add').send({dni: dni, name: name, surname: surname, email: email}).set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
    });

    /**
     * Test that we can get a user from the database without error
     */
    it("Can get a user", async () => {
        const response: Response = await request(app).get('/api/users/55555555E');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(
        expect.objectContaining({
            "user":[{
                dni: '55555555E',
                name: 'Pepe',
                surname: 'Gonzalez',
                email: 'pepegonzalez@gmail.com'
            }]
        })
        );
    });

});

describe('orderproducts ', () => {

    /*
     * Test that we can list all the orderedProducts without any error.
     */
     it('Can get all the orderedProducts',async () => {
        const response:Response = await request(app).get("/api/orderProducts/list");
        expect(response.statusCode).toBe(200);
    });

});