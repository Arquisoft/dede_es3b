import React, { Component, useState, useEffect } from 'react';
import { Button, Card, CardContent, Container, Typography } from "@material-ui/core";
import ProfileViewer from "../../shippment/PersonalDataForm";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

type ReviewType = {
  setPrecio: (precio: number)=> void;
}

const Login: React.FC<ReviewType>= ({setPrecio}) =>{
    const [abrirAdmin, setAdmin] = useState(false);
    const [abrirPod, setPod] = useState(false);

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
                >
                Login Admin
                </Button>
                
                <Button
                    key="POD"
                    onClick={() => {
                            pod();
                        }}
                >
                Login POD
                </Button>
            </Box>

            

            <div>
                {abrirAdmin ?  
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="User name admin"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="lastName"
                                name="lastName"
                                label="Password admin"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                onClick={() => { }}
                            >
                            Login
                            </Button>
                        </Grid>
                    </Grid>
                    : abrirAdmin }
            </div>

            <div>
                {abrirPod ? <ProfileViewer setPrecio={setPrecio}/> : abrirPod}
            </div>
            
      </Container>
  );
}

export default Login