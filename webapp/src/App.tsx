import React, { Component, useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import { getProducts, getUsers } from './api/api';
import { User } from './shared/shareddtypes';
import './App.css';
import ProductList from './components/products/ProductList';
import { Footer } from './components/generalComponents/Footer';
import { Product } from './shared/shareddtypes'
import { ProductCart } from './shared/shareddtypes'
import NavBar from './components/generalComponents/NavBar';
import toast, { Toaster } from 'react-hot-toast';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Checkout from './shippment/CheckOut';
import Login from './components/login/Login';
import Button from '@mui/material/Button';

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

  useEffect(() => {
    const carritoPersistente = localStorage.getItem("carrito");
    if(carritoPersistente){
      let carrito: ProductCart[] = JSON.parse(carritoPersistente);
      setCarrito(carrito);
    }
    else
      localStorage.setItem("carrito", JSON.stringify([]));
  }, []);

  const [productos, setProductos] = useState<Product[]>([]);

  const refreshProductList = async () => {
    setProductos(await getProducts());
  }

  useEffect(() => {
    refreshProductList();
  }, []);

  const [carrito, setCarrito] = useState([] as ProductCart[]);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito]);

  const addToCart = (clickedItem: Product) => {
    setCarrito(estadoActual => {
      const estaEnElCarrito = estadoActual.find(i => i.id === clickedItem.id);
      if (!estaEnElCarrito) {
        toast.success('Añadido');
        return [...estadoActual, { ...clickedItem, quantity: 1 }];
      }
      return [...estadoActual];
    });
  }

  const removeFromCart = (id: string) => {
    setCarrito(estadoActual => (
      estadoActual.reduce(
        (coleccion, p) => {
          if (p.id === id) {
            return coleccion;
          }
          return [...coleccion, p];
        }
        , [] as ProductCart[]
      )
    )
    )
  }

  const increaseFromCart = (clickedItem: ProductCart) => {
    setCarrito(estadoActual => {
      const estaEnElCarrito = estadoActual.find(i => i.id === clickedItem.id);
      if (estaEnElCarrito) {
        estadoActual.reduce(
          (coleccion, p) => {
            if (p.id === clickedItem.id) {
              p.quantity++;
              return [...coleccion, p];
            }
            return [...coleccion, p];
          }
          , [] as ProductCart[]
        );
      }
      return [...estadoActual];
    });
  }

  const reduceFromCart = (id: string) => {
    setCarrito(estadoActual => (
      estadoActual.reduce(
        (coleccion, p) => {
          if (p.id === id) {
            if (p.quantity > 1) {
              p.quantity--;
              return [...coleccion, p];
            }
            else
              return coleccion;
          }
          return [...coleccion, p];
        }
        , [] as ProductCart[]
      )
    )
    )
  }

  const getPrecio = () => {
    return carrito.reduce((acc: number, p) => acc + p.quantity * p.price, 0);
  }

  const getElementosCarrito = () => { return carrito.length; }
  return (
    <>
      <Container>

        <NavBar props={carrito} remove={removeFromCart} precio={getPrecio} aumentar={increaseFromCart} reducir={reduceFromCart}></NavBar>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element= {<ProductList props={productos} add={addToCart}></ProductList> } />
            <Route path="/login" element= {<Login setPrecio={() => getPrecio()}/> } />
            <Route path="/checkout" element= {<Checkout carrito={productos} precio={() => getPrecio()}></Checkout> } />
          </Routes>
        </Router>
        
        <Footer></Footer>
      </Container>
    </>
  );
}

export default App;
