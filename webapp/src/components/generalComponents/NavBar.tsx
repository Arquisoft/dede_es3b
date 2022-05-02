import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ProductCart } from '../../shared/shareddtypes';
import ProductCartList from '../carrito/ProductCartList';
import Drawer from '@mui/material/Drawer';

const pages = ['Productos', 'Mi perfil'];

const optionsProductos = ['Todos los productos', 'Raquetas', 'Pelotas'];
const optionsMiPerfil = ['Iniciar sesión', 'Ver pedidos'];

type Cart = {
    props: ProductCart[];
    remove: (id: string) => void;
    precio: () => number;
    aumentar: (clickedItem: ProductCart) => void;
    reducir: (id: string) => void;
}

const NavBar: React.FC<Cart> = ({ props, remove, precio, aumentar, reducir }) => {
    const [abrirCarrito, setAbrirCarrito] = useState(false);
    const [anchorElNavProductos, setAnchorElNavProductos] = React.useState<null | HTMLElement>(null);
    const [anchorElNavMiPerfil, setAnchorElNavMiPerfil] = React.useState<null | HTMLElement>(null);

    const handleOpenProductosMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNavProductos(event.currentTarget);
    };

    const handleCloseProductosMenu = () => {
        setAnchorElNavProductos(null);
    };

    const handleOpenMiPerfilMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNavMiPerfil(event.currentTarget);
    };

    const handleCloseMiPerfilMenu = () => {
        setAnchorElNavMiPerfil(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: "#008b8b", color: "white" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src='https://res.cloudinary.com/asw2122/image/upload/v1648725943/logo-dedeportes.png' alt="dedeportes" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key={pages[0]}
                            onClick={handleOpenProductosMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {pages[0]}
                        </Button>
                        <Menu
                            sx={{ mt: '45px' }}
                            anchorEl={anchorElNavProductos}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}

                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNavProductos)}
                            onClose={handleCloseProductosMenu}
                        >
                            <MenuItem key={optionsProductos[0]} component='a' href='/'>
                                <Typography textAlign="center">{optionsProductos[0]}</Typography>
                            </MenuItem>
                            <MenuItem key={optionsProductos[1]} component='a' href='/raquets'>
                                <Typography textAlign="center">{optionsProductos[1]}</Typography>
                            </MenuItem>
                            <MenuItem key={optionsProductos[2]} component='a' href='/balls'>
                                <Typography textAlign="center">{optionsProductos[2]}</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key={pages[1]}
                            onClick={handleOpenMiPerfilMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {pages[1]}
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
                            <MenuItem key={optionsMiPerfil[0]} component='a' href='/login'>
                                <Typography textAlign="center">{optionsMiPerfil[0]}</Typography>
                            </MenuItem>
                            <MenuItem key={optionsMiPerfil[1]} component='a' href='/login'>
                                <Typography textAlign="center">{optionsMiPerfil[1]}</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Drawer anchor='right' open={abrirCarrito} onClose={() => setAbrirCarrito(false)}>
                            <ProductCartList productos={props} remove={remove} precio={precio} aumentar={aumentar} reducir={reducir}></ProductCartList>
                        </Drawer>
                        <Tooltip title="Ver carrito">
                            <IconButton sx={{ p: 0 }} onClick={() => setAbrirCarrito(true)}>
                                <img src="https://res.cloudinary.com/asw2122/image/upload/v1648726327/carrito.png" alt="Ver carrito" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;