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
import { useState } from 'react';
import { Order, OrderProduct, Product } from '../../shared/shareddtypes';
import { findOrderProductById, findProductById, getOrders } from '../../api/api';

type Producto = {
    name: string,
    quantity: number,
    price: number
}

function createData(
    name: String,
    surname: String,
    email: String,
    direction: String,
    price: Number,
    productos: Producto[]
) {
    return {
        name,
        surname,
        email,
        direction,
        price,
        productos
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name + " " + row.surname}
                </TableCell>
                <TableCell >{row.email}</TableCell>
                <TableCell >{row.direction}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
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
                                    {row.productos.map((producto) => (
                                        <TableRow key={producto.name}>
                                            <TableCell component="th" scope="row">
                                                {producto.name}
                                            </TableCell>
                                            <TableCell>{producto.quantity}</TableCell>
                                            <TableCell>{producto.price}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}





export default function CollapsibleTable() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [orderProducts, setOrderProducts] = useState<OrderProduct[]>([]);
    const [product, setProduct] = useState<Product>();
    const [productos, setProductos] = useState<Producto[]>([]);

    const rows: any[] = useState<any[]>([]);

    const getAllOrders = async () => {
        setOrders(await getOrders());
        console.log(orders);
        //recorremos los pedidos
        orders.map(async (order) => {
            //guardamos los order-products
            setOrderProducts(await findOrderProductById(order.id));
            //recorremos los order-products
            orderProducts.map(async (op) => {
                //guardamos el producto
                setProduct(await findProductById(op.id_product));
                productos.concat({
                    name: product!.name,
                    quantity: op.quantity,
                    price: product!.price
                })
            })
            rows.concat(createData(order.name, order.surname, order.email, order.pod_direction, order.price, productos))
            for (let index = 0; index < productos.length; index++) {
                productos.pop();
            }
        })
    };

    getAllOrders();



    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Nombre y apellidos</TableCell>
                        <TableCell >Email</TableCell>
                        <TableCell >Direccion</TableCell>
                        <TableCell align="right">Precio</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}