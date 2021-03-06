import React, { Component, useState, useEffect } from 'react';
import { Button, Card, CardContent, Container, Typography } from "@material-ui/core";
import ProfileViewer from "../../shippment/PersonalDataForm";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextFiedldValidator from './TextFieldValidator';
import { ProductCart, Order } from '../../shared/shareddtypes';

type ReviewType = {
    setPrecio: (precio: number) => void;
    setLoggedAdmin: (admin:boolean) => void;
    adminLogged: boolean;
}

const Login: React.FC<ReviewType> = ({ setPrecio, setLoggedAdmin, adminLogged }) => {
    const [abrirAdmin, setAdmin] = useState(false);
    const [abrirPod, setPod] = useState(false);
    const [anyError, setAnyError] = useState(false);
    const [order, setOrder] = useState<Order>({
        id: 'string',
        pod_name: 'string',
        name: 'string',
        surname: 'string',
        creditcard_number: 'string',
        expiration_date: 'string',
        price: 90,
        pod_direction:'string'
      });
    function pod() {
        setAdmin(false);
        setPod(true);
    }

    function admin() {
        setAdmin(true);
        setPod(false);
    }

    return (
        <Container>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                    key="Admin"
                    onClick={() => {
                        admin();
                    }}
                    variant="contained"
                >
                    Login Admin
                </Button>
                <Button
                    key="POD"
                    onClick={() => {
                        pod();
                    }}
                    variant="contained"
                >
                    Login POD
                </Button>
            </Box>
            <Box bgcolor="white">
                <div>
                    {abrirAdmin ?
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextFiedldValidator setLoggedAdmin={setLoggedAdmin}></TextFiedldValidator>
                            </Grid>
                        </Grid>
                        : abrirAdmin}
                </div>

                <div>
                    {abrirPod && !adminLogged ? <ProfileViewer setPrecio={setPrecio} setAnyError={setAnyError} pedido={order}/> : abrirPod}
                </div>
            </Box>
        </Container>
    );
}

export default Login