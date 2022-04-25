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
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const pages = ['Deportes', 'Material', 'Ropa', 'Mi perfil'];

const optionsDeportes = ['Pádel', 'Fútbol', 'Baloncesto'];
const optionsMaterial = ['Accesorios', 'Calzado', 'Pelotas'];
const optionsRopa = ['Camisetas', 'Pantalones', 'Chaquetas'];
const optionsMiPerfil = ['Iniciar sesión', 'Ver mis pedidos'];

type Cart = {
    props: ProductCart[];
    remove: (id: string) => void;
    precio: () => number;
    aumentar: (clickedItem: ProductCart) => void;
    reducir: (id: string) => void;
}

const NavBar: React.FC<Cart> = ({ props, remove, precio, aumentar, reducir }) => {
    const [anchorElNavCart, setAnchorElNavCart] = React.useState<null | HTMLElement>(null);
    const [anchorElNavMiPerfil, setAnchorElNavMiPerfil] = React.useState<null | HTMLElement>(null);

    const handleOpenCart = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNavCart(event.currentTarget);
    };

    const handleCloseCart = () => {
        setAnchorElNavCart(null);
    };

    const handleOpenMiPerfilMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNavMiPerfil(event.currentTarget);
    };

    const handleCloseMiPerfilMenu = () => {
        setAnchorElNavMiPerfil(null);
    };

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
                        <img src='https://res.cloudinary.com/asw2122/image/upload/v1648725943/logo-dedeportes.png' />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key='Mi perfil'
                            onClick={handleOpenMiPerfilMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Mi perfil
                        </Button>
                        <Menu
                            sx={{ mt: '45px' }}
                            anchorEl={anchorElNavMiPerfil}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}

                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNavMiPerfil)}
                            onClose={handleCloseMiPerfilMenu}
                        >
                            {optionsMiPerfil.map((option) => (
                                <MenuItem key={option} onClick={handleCloseMiPerfilMenu}>
                                    <Typography textAlign="center">{option}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Drawer anchor='right' open={Boolean(anchorElNavCart)} onClose={handleCloseCart}>
                            <ProductCartList productos={props} remove={remove} precio={precio} aumentar={aumentar} reducir={reducir}></ProductCartList>
                        </Drawer>
                        <Tooltip title="Ver carrito">
                            <IconButton sx={{ p: 0 }} onClick={handleOpenCart}>
                                <img src="https://res.cloudinary.com/asw2122/image/upload/v1648726327/carrito.png" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>

            <SwipeableDrawer anchor='right' open={Boolean(anchorElNavCart)} onOpen={handleCloseCart} onClose={handleCloseCart}>
                <ProductCartList productos={props} remove={remove} precio={precio} aumentar={aumentar} reducir={reducir}></ProductCartList>
            </SwipeableDrawer >

        </AppBar>
    );
};
export default NavBar;