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
import { Order, OrderProduct, Product } from "../../../shared/shareddtypes";
import { useState } from 'react';
import { findOrderProductById, findProductById } from '../../../api/api';
import VistaProductos from './VistaProductos';

type OrderProducts = {
    order: Order;
}

const VistaPedidoYProductos: React.FC<OrderProducts> = ({ order }) => {
    const [open, setOpen] = useState(false);
    let orderProducts: OrderProduct[];
    var quantities: Number[] = [];
    var products: Product[] = [];
    let index = -1;

    const getOrderProducts = async () => {
        orderProducts = await findOrderProductById(order.id);
    }

    const getProductsYQuantities = async () => {
        (await findOrderProductById(order.id)).map(async (o) => {
            products.push(await findProductById(o.id_product));
            quantities.push(o.quantity);
        });
    }

    type OrderTableItemProps = {
        order: Order;
    };

    function OrderTableItem(props: OrderTableItemProps): JSX.Element {
        return <div>Hola</div>
    }

    return <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => {
                        setOpen(!open);
                        getOrderProducts();
                        getProductsYQuantities();
                    }}
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
                {order.name + " " + order.surname}
            </TableCell>
            <TableCell >{order.email}</TableCell>
            <TableCell >{order.pod_direction}</TableCell>
            <TableCell align="right">{order.price}</TableCell>
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
                                    products.map((pr) => {
                                        return <VistaProductos product={pr} quantity={quantities[index++]}></VistaProductos>
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