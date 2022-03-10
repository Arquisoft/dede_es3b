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
import { Footer } from './components/generalComponents/Footer';

function App(): JSX.Element {

  const [users, setUsers] = useState<User[]>([]);

  const refreshUserList = async () => {
    setUsers(await getUsers());
  }

  useEffect(() => {
    refreshUserList();
  }, []);

  return (
    <>
      <Container>
        <ProductList></ProductList>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default App;
