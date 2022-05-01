import request, {Response} from 'supertest';
import express, { Application,RequestHandler } from 'express';
import * as http from 'http';
import bp from 'body-parser';
import cors from 'cors';
import api from '../api';

import path, { normalize } from 'path';
var dotenvPath = path.resolve('../.env');
require("dotenv").config({path: dotenvPath});

const crypto = require("crypto");


const {v4: uuidv4} = require("uuid");
let app:Application;
let server:http.Server;

const mongoose = require("mongoose");
const uri = 'mongodb+srv://DeDeportes3b:dedeportes2@aswdedeportes.9ukdb.mongodb.net/DatabaseTest?retryWrites=true&w=majority'; // NOSONAR

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
        let email:string = await uuidv4()
        let password:string = 'h0l4' // NOSONAR
        const response:Response = await request(app).post('/api/users/add').send({email: email, password: password}).set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
    });

    /**
     * Test that we can´t insert a repeated user
     */
     it("Can´t insert a repeated user", async () => {
        let email:string = '1745423e-f726-490f-a85f-596c912dc161'
        let password:string = 'h0l4' // NOSONAR
        const response: Response = await request(app).get('/api/users/add').send({email: email, password: password}).set('Accept', 'application/json');
        expect(response.statusCode).toBe(400);

    });

    /**
     * Test that we can get a single user
     */
     it("Can get a single user", async () => {
        const response: Response = await request(app).get('/api/users/1745423e-f726-490f-a85f-596c912dc161');
        const pass = crypto.createHmac('sha256','h0l4').digest('hex');
        expect(response.statusCode).toBe(200);
        expect.objectContaining({
            "user":[{
                email: '1745423e-f726-490f-a85f-596c912dc161',
                password: pass
            }]
        })

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
        let id_order:string = 'edc7f4de-34c4-407a-b83c-3e41b469b5df'
        let id_product:string = '6248170a6fa3602e90668a9c'
        let pod_name:string = 'UOOOO'
        const response:Response = await request(app).post('/api/orderProducts/add').send({id_order: id_order, id_product: id_product, quantity: quantity,pod_name:pod_name}).set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
    });

    /*
     * Test that a orderedProduct can´t be added with invalid product_id.
     */
    it('Can´t insert a correct orderedProduct because this product not exist', async () => {
        let quantity:number = 12
        let id_order:string = '624819246fa3602e90668a9f'
        let id_product:string = 'hola'
        let pod_name:string = 'UOOOO'
        const response:Response = await request(app).post('/api/orderProducts/add').send({id_order: id_order, id_product: id_product, quantity: quantity,pod_name:pod_name}).set('Accept', 'application/json')
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
        let pod_name:string='UOOO'
        let name:string = 'Martin'
        let surname:string = 'Fernandez'
        let creditcard_number:string = '111-111-111-111'
        let expiration_date:string = '28-12-2022'
        let price:number = 15
        let pod_direction:string = 'micasa'
        const response:Response = await request(app).post('/api/orders/add')
            .send({id: id,pod_name:pod_name,name: name, surname: surname,creditcard_number: creditcard_number, 
                expiration_date: expiration_date, price: price, pod_direction: pod_direction})
            .set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
    });


});

describe('products ', () => {

    /*
     * Test that we can list all the products without any error.
     */
     it('Can get all the products',async () => {
        const response:Response = await request(app).get("/api/products/list");
        expect(response.statusCode).toBe(200);
    });

    /*
     * Test that we can list the products by an existing category without any error.
     */
    it('Can get all the products by category',async () => {
        const response:Response = await request(app).get("/api/products/Raquetas");
        expect(response.statusCode).toBe(200);
    });

    /*
     * Test that we can´t list the products by a non existing category without any error.
     */
    it('Can´t get all the products by category if the category is wrong',async () => {
        const response:Response = await request(app).get("/api/products/Playeros");
        expect(response.statusCode).toBe(400);
    });

    /*
     * Test that we can add a product.
     */
    it('Can add a product',async () => {
        let id:string = uuidv4()
        let description:string = 'Hola'
        let name:string = 'Nombre'
        let price:number = 30.5
        let category:string = 'Raquetas'
        const response:Response = await request(app).post('/api/products/add')
            .send({id: id, description: description, name: name, price: price, category: category})
            .set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
    });



});

describe('admin ', () => {

    /*
     * Test that we can list the admin.
     */
    it("Can get the admin", async () => {
        const response: Response = await request(app).get('/api/admin/admin');
        expect(response.statusCode).toBe(200);
    });



});