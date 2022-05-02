import * as React from 'react';
import { Box, Typography } from "@mui/material";
import { Order } from "../shared/shareddtypes";
import VistaPedidos from './pedidos/VistaPedidos';

type Orders = {
    orders: Order[];
}

const Profile: React.FC<Orders> = ({ orders }) => {
    return (
        <Box bgcolor="white">
            <Typography variant="h3" align="center">Pedidos</Typography>
            <VistaPedidos orders={orders}></VistaPedidos>
        </Box>
    );
};


export default Profile;