import express, { Request, Response, Router } from 'express';
import {check} from 'express-validator';
import { addOrder, findAllOrders, findById } from './controllers/OrderController';
import { addOrderProduct, findAllOrderProducts } from './controllers/OrderProductController';
import {findAllProducts} from './controllers/ProductController';
import {findAllUsers,findByDni,addUser} from './controllers/UserController';
const bodyParser = require('body-parser')

const api:Router = express.Router()
//Mensaje
api.use(bodyParser.urlencoded({extended:true}));

api.get("/products/list", findAllProducts);

api.get("/users/list",findAllUsers)
api.get("/users/:dni",findByDni)
api.get("/orders/list",findAllOrders)
api.post("/orders/add",addOrder)
api.post("/users/add",addUser)
api.post("/orderProducts/add",addOrderProduct)
api.get("/orderProducts/list",findAllOrderProducts)
api.get("/orders/:id",findById)

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

