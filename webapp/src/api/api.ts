import { TableBody } from '@mui/material';
import {User, Product} from '../shared/shareddtypes';

import {User, Product, ProductCart, Order} from '../shared/shareddtypes';
export async function addUser(user:User):Promise<boolean>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'name':user.name, 'email':user.email})
      });
    if (response.status===200)
      return true;
    else
      return false;
}

export async function getUsers():Promise<User[]>{
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/list');
    //The objects returned by the api are directly convertible to User objects
    return response.json()
}

export async function getProducts():Promise<Product[]>{
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
  let response = await fetch(apiEndPoint+'/products/list');
  //The objects returned by the api are directly convertible to User objects
  return response.json()
}

export async function addOrder(order:Order):Promise<boolean>{
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
  let response = await fetch(apiEndPoint+'/orders/add', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({'dni':order.dni, 'name':order.name, 'surname':order.surname,
                            'email':order.email, 'cc_number':order.cc_number, 'expiration_date':order.expiration_date,
                            'price':order.price
                          })
    });
  if (response.status===200)
    return true;
  else
    return false;
}

export async function addOrderProducts(products:ProductCart[], order:Order):Promise<boolean>{
  const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api';
  const getJSON = () => {
    return products.reduce((acc: string, p) => acc+JSON.stringify({'productId':p.id, 'orderId':order.id, 'quantity': p.quantity}), "");
  }
  let response = await fetch(apiEndPoint+'/orderProducts/add', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: getJSON()
    });
  if (response.status===200)
    return true;
  else
    return false;
}