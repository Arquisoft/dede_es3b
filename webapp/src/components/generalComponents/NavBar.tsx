import React, { Component,useState, useEffect } from 'react';
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
import { Drawer } from '@material-ui/core';
import { ProductCart } from '../../shared/shareddtypes';
import ProductCartList from '../carrito/ProductCartList';

const pages = ['Deportes', 'Material', 'Ropa'];

const optionsDeportes = ['Pádel', 'Fútbol', 'Baloncesto'];
const optionsMaterial = ['Accesorios', 'Calzado', 'Pelotas'];
const optionsRopa = ['Camisetas', 'Pantalones', 'Chaquetas'];

type Cart = {
    props: ProductCart[];
    remove: (id: string)=>void;
    aumentar:(clickedItem: ProductCart)=>void;
    reducir:(id: string)=>void;
}

const NavBar: React.FC<Cart> = ({props,remove, aumentar, reducir}) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElNavDeportes, setAnchorElNavDeportes] = React.useState<null | HTMLElement>(null);
    const [anchorElNavMaterial, setAnchorElNavMaterial] = React.useState<null | HTMLElement>(null);
    const [anchorElNavRopa, setAnchorElNavRopa] = React.useState<null | HTMLElement>(null);

    const [isOpened, setIsOpened] = useState(false);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenDeportesMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNavDeportes(event.currentTarget);
    };

    const handleCloseDeportesMenu = () => {
        setAnchorElNavDeportes(null);
    };

    const handleOpenMaterialMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNavMaterial(event.currentTarget);
    };

    const handleCloseMaterialMenu = () => {
        setAnchorElNavMaterial(null);
    };

    const handleOpenRopaMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNavRopa(event.currentTarget);
    };

    const handleCloseRopaMenu = () => {
        setAnchorElNavRopa(null);
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
                        <img src='../../../public/images/logo-dedeportes.png' />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key={pages[0]}
                            onClick={handleOpenDeportesMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Deportes
                        </Button>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElNavDeportes}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNavDeportes)}
                            onClose={handleCloseDeportesMenu}
                        >
                            {optionsDeportes.map((option) => (
                                <MenuItem key={option} onClick={handleCloseDeportesMenu}>
                                    <Typography textAlign="center">{option}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        <Button
                            key={pages[1]}
                            onClick={handleOpenMaterialMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Material
                        </Button>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElNavMaterial}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNavMaterial)}
                            onClose={handleCloseMaterialMenu}
                        >
                            {optionsMaterial.map((option) => (
                                <MenuItem key={option} onClick={handleCloseMaterialMenu}>
                                    <Typography textAlign="center">{option}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                        <Button
                            key={pages[2]}
                            onClick={handleOpenRopaMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Ropa
                        </Button>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElNavRopa}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNavRopa)}
                            onClose={handleCloseRopaMenu}
                        >
                            {optionsRopa.map((option) => (
                                <MenuItem key={option} onClick={handleCloseRopaMenu}>
                                    <Typography textAlign="center">{option}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Ver carrito">
                            <IconButton sx={{ p: 0 }} onClick={() => setIsOpened(true)}>
                                <img src="../../public/products/carrito.png" />
                            </IconButton>
                        </Tooltip>
                        
                        <Drawer anchor='right' open={isOpened} onClose={() => setIsOpened(false)}>
                            <ProductCartList productos={props} remove={remove} aumentar={aumentar} reducir={reducir}></ProductCartList>
                        </Drawer>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;