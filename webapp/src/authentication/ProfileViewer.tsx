import { useSession, CombinedDataProvider, Image, LogoutButton, Text,useThing  } from "@inrupt/solid-ui-react";
import { Button, Card, CardActionArea, CardContent, Container, Typography } from "@material-ui/core";
import { FOAF,RDF, VCARD } from "@inrupt/lit-generated-vocab-common";
import * as url from "url";
import {
  getStringNoLocale,   
} from "@inrupt/solid-client";




const ProfileViewer = () => {
  const { session } = useSession();

  const datasetIri = session.info.webId ;
  const thingIri = VCARD.Address.iri.value;
  
  const { thing, error } = useThing(datasetIri, thingIri);
 
  
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
            <Typography variant="body2" color="textSecondary" component="p" style={{ display: "flex", alignItems: "center" }}>
              <Text property={VCARD.organization_name.iri.value} />
            </Typography>
          </CardContent>

          <CardActionArea style={{ justifyContent: "center", display: "flex" }}>
            <Image property={VCARD.hasPhoto.iri.value} width={480} />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {/* get address */}
              <Text property={VCARD.note.iri.value} />
            
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