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

    /*
     * Test that a orderedProduct can be added without throwing any errors.
     */
     it('Can insert a correct orderedProduct correctly with existing order_id and product_id', async () => {
        let quantity:number = 12
        let id_order:string = '62481a106fa3602e90668aa0'
        let id_product:string = '6248170a6fa3602e90668a9c'
        const response:Response = await request(app).post('/api/orderProducts/add').send({id_order: id_order, id_product: id_product, quantity: quantity}).set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
    });

    /*
     * Test that a orderedProduct can´t be added with invalid order_id.
     */
    it('Can´t insert a correct orderedProduct because this order not exist', async () => {
        let quantity:number = 12
        let id_order:string = 'hola'
        let id_product:string = '6248170a6fa3602e90668a9c'
        const response:Response = await request(app).post('/api/orderProducts/add').send({id_order: id_order, id_product: id_product, quantity: quantity}).set('Accept', 'application/json')
        expect(response.statusCode).toBe(400);
    });


    /*
     * Test that a orderedProduct can´t be added with invalid product_id.
     */
    it('Can´t insert a correct orderedProduct because this product not exist', async () => {
        let quantity:number = 12
        let id_order:string = '624819246fa3602e90668a9f'
        let id_product:string = 'hola'
        const response:Response = await request(app).post('/api/orderProducts/add').send({id_order: id_order, id_product: id_product, quantity: quantity}).set('Accept', 'application/json')
        expect(response.statusCode).toBe(400);
    });
});

describe('order ', () => {

    /*
     * Test that we can list all the orders without any error.
     */
     it('Can get all the orders',async () => {
        const response:Response = await request(app).get("/api/orders/list");
        expect(response.statusCode).toBe(200);
    });

    /*
     * Test that a order can be added without throwing any errors.
     * We don´t have to prove that exists an user with that information because we get the information from the POD
     */
    it('Can insert a correct order correctly with a non existing order_id', async () => {
        let id:string = uuidv4()
        let dni:string = '11111111A'
        let name:string = 'Martin'
        let surname:string = 'Fernandez'
        let email:string = 'martinfernandez@gmail.com'
        let creditcard_number:string = '111-111-111-111'
        let expiration_date:string = '28-12-2022'
        let price:number = 15
        let pod_direction:string = 'micasa'
        const response:Response = await request(app).post('/api/orders/add')
            .send({id: id, dni: dni, name: name, surname: surname, email: email, creditcard_number: creditcard_number, 
                expiration_date: expiration_date, price: price, pod_direction: pod_direction})
            .set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
    });


});