import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { TableCell, TableRow } from "@mui/material";
import TableContainer from '@mui/material/TableContainer';
import { Order } from "../../shared/shareddtypes";
import VistaPedidoYProductos from './VistaPedidoYProductos';

type Orders = {
    orders: Order[];
}

const VistaPedidos: React.FC<Orders> = ({ orders }) => {

    return <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
            <TableHead>
                <TableRow>
                    <TableCell />
                    <TableCell>Nombre y apellidos</TableCell>
                    <TableCell>Usuario</TableCell>
                    <TableCell >Direccion</TableCell>
                    <TableCell align="right">Precio total</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders.map((orden) => (
                    <VistaPedidoYProductos key={orden.id} order={orden}></VistaPedidoYProductos>
                ))}
            </TableBody>
        </Table>
    </TableContainer >
};


export default VistaPedidos;