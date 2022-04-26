import { TableBody } from '@mui/material';
import { User, Product, ProductCart, Order } from '../shared/shareddtypes';

export async function addUser(user: User): Promise<boolean> {
  const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
  let response = await fetch(apiEndPoint + '/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'name': user.name, 'email': user.email })
  });
  if (response.status === 200)
    return true;
  else
    return false;
}

export async function getUsers(): Promise<User[]> {
  const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
  let response = await fetch(apiEndPoint + '/users/list');
  //The objects returned by the api are directly convertible to User objects
  return response.json()
}

export async function getProducts(): Promise<Product[]> {

  const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
  let response = await fetch(apiEndPoint + '/products/list');
  //The objects returned by the api are directly convertible to User objects
  return response.json()
}

export async function addOrder(order: Order): Promise<boolean> {

  const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api'

  let response = await fetch(apiEndPoint + '/orders/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'dni': order.dni, 'name': order.name, 'surname': order.surname,
      'email': order.email, 'creditcard_number': order.creditcard_number, 'expiration_date': order.expiration_date,
      'price': order.price, 'pod_direction': order.pod_direction
    })
  });
  if (response.status === 200)
    return true;
  else
    return false;
}

export async function addOrderProducts(products: ProductCart[], order: Order): Promise<boolean> {
  const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api';

  products.forEach(p => {
    const getJSON = () => {
      return JSON.stringify({ 'quantity': p.quantity, 'id_product': p.id, 'id_order': order.id });
    }
    let response = fetch(apiEndPoint + '/orderProducts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: getJSON()
    });
  });

  return true;
}

export async function findAdmin(email: String, password: String): Promise<boolean> {

  const apiEndPoint = process.env.REACT_APP_API_URI || 'http://localhost:5000/api';
  let response = await fetch(apiEndPoint + '/admin/' + email, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
}