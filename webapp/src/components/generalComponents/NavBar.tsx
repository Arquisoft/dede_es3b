import React, { Component, useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ProductCart } from '../../shared/shareddtypes';
import ProductCartList from '../carrito/ProductCartList';
import Drawer from '@mui/material/Drawer';

const pages = ['Catalogo de Productos', 'Mi perfil'];

const optionsMiPerfil = ['Iniciar sesión', 'Ver mis pedidos'];

type Cart = {
    props: ProductCart[];
    remove: (id: string) => void;
    precio: () => number;
    aumentar: (clickedItem: ProductCart) => void;
    reducir: (id: string) => void;
}

const NavBar: React.FC<Cart> = ({ props, remove, precio, aumentar, reducir }) => {
    const [abrirCarrito, setAbrirCarrito] = useState(false);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src='https://res.cloudinary.com/asw2122/image/upload/v1648725943/logo-dedeportes.png' alt="dedeportes"/>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key={pages[0]}
                            href="/"
                            onClick={() => {
                                            window.location.assign('/');
                                            window.location.reload();
                                        }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {pages[0]}
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 , display: { xs: 'none', md: 'flex' } }}>
                        <Drawer  anchor='right' open={abrirCarrito} onClose={() => setAbrirCarrito(false)}>
                            <ProductCartList productos={props} remove={remove} precio={precio} aumentar={aumentar} reducir={reducir}></ProductCartList>
                        </Drawer>
                        <Tooltip title="Ver carrito">
                            <IconButton sx={{ p: 0 }} onClick={() => setAbrirCarrito(true)}>
                                <img src="https://res.cloudinary.com/asw2122/image/upload/v1648726327/carrito.png" alt="Ver carrito"/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;