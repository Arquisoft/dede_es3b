import React, { Component,useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import EmailForm from './components/EmailForm';
import Welcome from './components/Welcome';
import UserList from './components/UserList';
import { getProducts, getUsers } from './api/api';
import { User } from './shared/shareddtypes';
import './App.css';
import Authenticator from './authentication/Authenticator';
import ProductList from './components/products/ProductList';
import { Footer } from './components/generalComponents/Footer';
import { Product } from './shared/shareddtypes'
import { ProductCart } from './shared/shareddtypes'
import NavBar from './components/generalComponents/NavBar';

// const productos = [
//   {
//       id: '1',
//       category: 'Ropa',
//       name: 'Chaqueta',
//       description: 'Para abrigarse',
//       price: 90
//   },
//   {
//       id: '2',
//       category: 'Material',
//       name: 'Pelota',
//       description: 'Para jugar',
//       price: 2
//   },
//   {
//       id: '3',
//       category: 'Material',
//       name: 'Pala de pádel',
//       description: 'Para jugar al pádel',
//       price: 265
//   },
//   {
//       id: '4',
//       category: 'Ropa',
//       name: 'Pantalón',
//       description: 'Para vestirse',
//       price: 45
//   },
//   {
//       id: '5',
//       category: 'Material',
//       name: 'Balón',
//       description: 'Para jugar al furbo',
//       price: 25
//   },
//   {
//       id: '6',
//       category: 'Material',
//       name: 'Guantes',
//       description: 'Para parar golitos',
//       price: 34
//   }
// ]

function App(): JSX.Element {

  const [users, setUsers] = useState<User[]>([]);
  

  const refreshUserList = async () => {
    setUsers(await getUsers());
  }

  useEffect(() => {
    refreshUserList();
  }, []);

  const [productos, setProductos] = useState<Product[]>([]);

  const refreshProductList = async () => {
    setProductos(await getProducts());
  }

  useEffect(() => {
    refreshProductList();
  }, []);

  const [carrito, setCarrito] = useState([] as ProductCart[]);

  const addToCart = (clickedItem: Product) => {
    setCarrito( estadoActual => {
      const estaEnElCarrito = estadoActual.find(i => i.id === clickedItem.id);
      if(!estaEnElCarrito)
        return [...estadoActual,{...clickedItem, quantity: 1}];
      return [...estadoActual];
    });
  }

  const removeFromCart = (id: string) => {
    setCarrito( estadoActual =>(
        estadoActual.reduce(
          (coleccion, p)=> {
            if(p.id===id)
              return coleccion;
            return [...coleccion, p];
          }
          , [] as ProductCart[]
      )
        )
    )
  }

  const getPrecio = () => {
    return carrito.reduce((acc: number, p) => acc+p.quantity*p.price,0);
  }

  const getElementosCarrito = () => { return carrito.length; }
  return (
    <>
      <Container>
        
        <NavBar props={carrito} remove={removeFromCart} precio={getPrecio}></NavBar>
        <ProductList props={productos} add={addToCart}></ProductList>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default App;
