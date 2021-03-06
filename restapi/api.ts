import express, { Request, Response, Router } from 'express';
import { check } from 'express-validator';
import { addOrder, findAllOrders, findById, findOrderByName } from './controllers/OrderController';
import { addOrderProduct, findAllOrderProducts, findByOrderProductId } from './controllers/OrderProductController';
import { findAllProducts, findByCategory, addProduct, findProductById } from './controllers/ProductController';
import { findAllUsers, findByEmail, addUser } from './controllers/UserController';
import { findAdmin } from './controllers/AdminUserController';

const bodyParser = require('body-parser')

const api: Router = express.Router()

api.use(bodyParser.urlencoded({ extended: true }));

api.get("/products/list", findAllProducts);
api.get("/products/category=:category", findByCategory);
api.get("/products/id=:id", findProductById);
api.post("/products/add", addProduct);
api.get("/users/list", findAllUsers)
api.get("/users/:email", findByEmail)
api.get("/orders/list", findAllOrders)
api.get("/orders/list/:name", findOrderByName)
api.post("/orders/add", addOrder)
api.post("/users/add", addUser)
api.post("/orderProducts/add", addOrderProduct)
api.get("/orderProducts/list", findAllOrderProducts)
api.get("/orderProducts/:id", findByOrderProductId)
api.get("/orders/:id", findById)
api.get("/admin/:username", findAdmin)


export default api;


/*
interface User {
  name: string;
  email: string;
}



//This is not a restapi as it mantains state but it is here for
//simplicity. A database should be used instead.
let users: Array<User> = [{name:"Martin", email:"Fernandez"}];

api.get(
  "/users/list",
  async (req: Request, res: Response): Promise<Response> => {
      return res.status(200).send(users);
  }
);

api.post(
"/users/add",[
  check('name').isLength({ min: 1 }).trim().escape(),
  check('email').isEmail().normalizeEmail(),
],
async (req: Request, res: Response): Promise<Response> => {
  let name = req.body.name;
  let email = req.body.email;
  let user: User = {name:name,email:email}
  users.push(user);
  return res.sendStatus(200);
}
);
*/

