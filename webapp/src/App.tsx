import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import EmailForm from './components/EmailForm';
import Welcome from './components/Welcome';
import UserList from './components/UserList';
import { getUsers } from './api/api';
import { User } from './shared/shareddtypes';
import './App.css';
import Authenticator from './authentication/Authenticator';
import ProductList from './components/products/ProductList';
import ProductCartList from './components/carrito/ProductCartList';
import { Footer } from './components/generalComponents/Footer';
import { Product } from './shared/shareddtypes'

function App(): JSX.Element {

  const [users, setUsers] = useState<User[]>([]);

  const refreshUserList = async () => {
    setUsers(await getUsers());
  }

  useEffect(() => {
    refreshUserList();
  }, []);

  const [carrito, setCarrito] = useState([] as Product[]);

  const addToCart = (clickedItem: Product) => {
    setCarrito( estadoActual => {
      const estaEnElCarrito = estadoActual.find(i => i.id === clickedItem.id);
      if(!estaEnElCarrito)
        return [...estadoActual,{...clickedItem}];
      return [...estadoActual];
    });
  }

  return (
    <>
      <Container>
        <ProductList add={addToCart}></ProductList>
        <ProductCartList productos={carrito}></ProductCartList>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default App;
