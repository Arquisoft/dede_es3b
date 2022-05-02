import {
    getSolidDataset, getStringNoLocale, getThing, Thing, getUrl
} from "@inrupt/solid-client";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import {VCARD} from "@inrupt/vocab-common-rdf";
import React, { useEffect} from "react";
import {getShippingPrice} from "../shippment/CalculateShippment";
import { ProductCart, Order } from '../shared/shareddtypes';

 async function retrievePODAddress(webID: string): Promise<string> {
    let profileDocumentURI = webID.split("#")[0]
    let myDataSet = await getSolidDataset(profileDocumentURI)
    let profile = getThing(myDataSet, webID)
    let urlAddress = getUrl(profile as Thing, VCARD.hasAddress) as string
    let addressProfile = await getThing(myDataSet, urlAddress)
    let ret= getStringNoLocale(addressProfile as Thing, VCARD.country_name) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.region) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.locality) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.postal_code) as string+" "+
    getStringNoLocale(addressProfile as Thing, VCARD.street_address) as string;
    
    return ret
  }

  async function retriebePODName(webID:string): Promise<string> {
    let profileDocumentURI = webID.split("#")[0]
    let myDataSet = await getSolidDataset(profileDocumentURI)
    let profile = getThing(myDataSet, webID)
    let name = getStringNoLocale(profile as Thing, VCARD.fn) as string;
    return name;
  }

//function GetAddress(props: any): JSX.Element 
  type ReviewType = {
    setPrecio: (precio: number)=> void;
    webID: string;
    pedido: Order;
  }
const GetAddress: React.FC<ReviewType>= ({webID,setPrecio, pedido}) => {
    const [address, setAddress] = React.useState("");
    const [name, setName] = React.useState("");

    const getPODAddress = async () => {
        setAddress(await retrievePODAddress(webID))
        //props.setAddr(await retrievePODAddress(props.webID));
        setName(await retriebePODName(webID))
        setPrecio(await getShippingPrice(await retrievePODAddress(webID)));
        //console.log(await getShippingPrice(await retrievePODAddress(props.webID)))
    }
    ;

    useEffect(() => {
        getPODAddress();
    })

    localStorage.setItem("userLogged",name);
    pedido.pod_name = name;
    pedido.pod_direction = address;

    return (
        <Grid container>
            <Box component="h3" >Address: {address}</Box>
        </Grid>
    );
}

export default GetAddress;