import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { TableCell, TableRow } from "@mui/material";
import TableContainer from '@mui/material/TableContainer';
import { Order, Product } from "../../../shared/shareddtypes";
import { useState } from 'react';
import VistaPedidoYProductos from './VistaPedidoYProductos';

type Orders = {
    orders: Order[];
}

const VistaPedidos: React.FC<Orders> = ({ orders }) => {
    const [quantities, setQuantities] = useState<number[]>([]);
    const [products, setProducts] = useState<Product[]>([]);

    return <TableContainer component={Paper}>
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
                {orders.map((orden) => (
                    <VistaPedidoYProductos order={orden}></VistaPedidoYProductos>
                ))}
            </TableBody>
        </Table>
    </TableContainer >
};


export default VistaPedidos;