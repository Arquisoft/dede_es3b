import { useSession, CombinedDataProvider, LogoutButton, Text  } from "@inrupt/solid-ui-react";
import { Button, Card, CardContent, Container, Typography } from "@material-ui/core";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";
import {getSolidDataset, getStringNoLocale, getThing, getUrl, Thing} from "@inrupt/solid-client";
import Box from "@mui/material/Box";
import React, {useEffect} from "react";
import GetAddress from "./GetAddress";
import { ProductCart, Order } from '../shared/shareddtypes';

import { ChangeEvent } from 'react';

type ReviewType = {
  setPrecio: (precio: number)=> void;
  pedido: Order;
}
//const ProfileViewer = (props:any) => 

const ProfileViewer: React.FC<ReviewType>= ({setPrecio, pedido}) =>{
  const { session } = useSession();
  const [addr, setAddr] = React.useState("");

  return (
    <Container fixed>
      {session.info.webId ? (
        <CombinedDataProvider 
          datasetUrl={session.info.webId} 
          thingUrl={session.info.webId}>
        <Card style={{ maxWidth: 480 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <Text property={FOAF.name.iri.value} />
            </Typography>
             <Typography gutterBottom variant="h5" component="h2">  
              <GetAddress webID={session.info.webId} setPrecio ={setPrecio} pedido={pedido} />
              

            </Typography>
          </CardContent>
        </Card>
      </CombinedDataProvider>
      ): null } 
             

      <LogoutButton >
        <Button style={{ marginTop: 20 }} variant="contained" color="primary">
          Logout
        </Button>
      </LogoutButton>


    </Container>
  );
}

export default ProfileViewer