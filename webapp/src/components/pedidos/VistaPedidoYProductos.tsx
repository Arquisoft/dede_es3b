import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect, useState } from 'react';
import { OrderProduct, Order, Product } from '../../shared/shareddtypes';
import { findOrderProductById, findProductById } from '../../api/api';

type OrderProducts = {
    order: Order;
}

type ProductQuantity = {
    prName: string;
    quantity: number;
    prPrice: number;
}

function VistaPedidoYProductos(order: OrderProducts): JSX.Element {
    const [open, setOpen] = useState(false);
    const [orderProducts, setOrderProducts] = useState<OrderProduct[]>([]);
    const [productsQuantity, setProductsQuantity] = useState<ProductQuantity[]>([]);

    const getOrderProducts = async () => {
        setOrderProducts(await findOrderProductById(order.order.id));
    }

    useEffect(() => {
        getOrderProducts();
    }, []);

    const getProductsYQuantities = async () => {
        var productsList: Product[] = [];
        var productQuantity: ProductQuantity[] = [];
        let index = 0;
        for (let i = 0; i < orderProducts.length; i++) {
            productsList[index] = await findProductById(orderProducts[i].id_product);
            productQuantity[index] = { prName: productsList[index].name, quantity: orderProducts[i].quantity, prPrice: productsList[index].price };
            index++;
        }
        setProductsQuantity(productQuantity);
    }

    return <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => {
                        setOpen(!open);
                        getProductsYQuantities();
                    }}
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
                {order.order.name + " " + order.order.surname}
            </TableCell>
            <TableCell >{order.order.pod_name}</TableCell>
            <TableCell >{order.order.pod_direction}</TableCell>
            <TableCell align="right">{order.order.price}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            Productos
                        </Typography>
                        <Table size="small" aria-label="purchases">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Cantidad</TableCell>
                                    <TableCell>Precio</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    productsQuantity.map((pr) => {
                                        return <TableRow key={pr.prName}>
                                            <TableCell component="th" scope="row">
                                                {pr.prName}
                                            </TableCell>
                                            <TableCell>{pr.quantity}</TableCell>
                                            <TableCell>{pr.prPrice}</TableCell>
                                        </TableRow>
                                    })
                                }
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    </React.Fragment>
};

export default VistaPedidoYProductos;