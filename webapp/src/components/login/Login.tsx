import React, { Component, useState, useEffect } from 'react';
import { Button, Card, CardContent, Container, Typography } from "@material-ui/core";
import ProfileViewer from "../../shippment/PersonalDataForm";

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
           <Button
                onClick={() => {
                        admin();
                    }}
            >
            Login Admin
            </Button>
            <div>
                {abrirAdmin ? <Button>hola</Button> : abrirAdmin }
            </div>
            <Button
                onClick={() => {
                       pod();
                    }}
            >
            Login POD
            </Button>
            <div>
                {abrirPod ? <ProfileViewer setPrecio={setPrecio}/> : abrirPod}
            </div>
            
      </Container>
  );
}

export default Login