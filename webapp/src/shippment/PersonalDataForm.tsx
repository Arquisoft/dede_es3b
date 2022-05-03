/* istanbul ignore file */
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextFieldCheckoutValidator from './TextFieldCheckoutValidator';
import Authenticator from '../authentication/Authenticator';
import { ProductCart, Order } from '../shared/shareddtypes';

type ReviewType = {
  setPrecio: (precio: number)=> void;
  setAnyError: (error: boolean) => void;
  pedido: Order;
}


const AddressForm: React.FC<ReviewType>= ({setPrecio, setAnyError, pedido}) => {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextFieldCheckoutValidator errores = {setAnyError} pedido={pedido}></TextFieldCheckoutValidator>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Authenticator setPrecio={setPrecio} pedido={pedido}></Authenticator>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;