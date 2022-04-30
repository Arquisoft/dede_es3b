import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Product, ProductCart } from '../../shared/shareddtypes';

type Cart = {
    props: ProductCart[];
    remove: (id: string)=>void;
    aumentar:(clickedItem: ProductCart)=>void;
    reducir:(id: string)=>void;
}

const VistaPedidosAdmin: React.FC<Cart> = ({props, remove, aumentar, reducir}) => {
    //const url = "https://res.cloudinary.com/asw2122/image/upload/" + props.img + ".png";
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID Pedido</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default VistaPedidosAdmin;