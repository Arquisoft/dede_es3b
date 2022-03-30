import { useSession, CombinedDataProvider, LogoutButton, Text  } from "@inrupt/solid-ui-react";
import { Button, Card, CardContent, Container, Typography } from "@material-ui/core";
import { FOAF, VCARD } from "@inrupt/lit-generated-vocab-common";
import {getSolidDataset, getStringNoLocale, getThing, getUrl, Thing} from "@inrupt/solid-client";
import Box from "@mui/material/Box";
import React, {useEffect} from "react";
import GetAddress from "./GetAddress";

import { ChangeEvent } from 'react';


const ProfileViewer = () => {
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
              <GetAddress webID={session.info.webId} addr={addr} setAddr ={setAddr}  />
              

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