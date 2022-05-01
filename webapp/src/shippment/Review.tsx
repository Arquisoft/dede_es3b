import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { ProductCart, Order } from '../shared/shareddtypes';
import { addOrder, addOrderProducts } from '../api/api';
// const products = [
//   {
//     name: 'Product 1',
//     desc: 'A nice thing',
//     price: '$9.99',
//   },
//   {
//     name: 'Product 2',
//     desc: 'Another thing',
//     price: '$3.45',
//   },
//   {
//     name: 'Product 3',
//     desc: 'Something else',
//     price: '$6.51',
//   },
//   {
//     name: 'Product 4',
//     desc: 'Best thing of all',
//     price: '$14.11',
//   },
//   { name: 'Shipping', desc: '', price: 'Free' },
// ];
//const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ];

type ReviewType = {
  productos: ProductCart[];
  precioCarrito: number;
  precioEnvio: number;
  order: Order;
}
const {v4: uuidv4} = require("uuid");

const Review: React.FC<ReviewType>= ({productos, precioCarrito, precioEnvio, order}) => {
  //crear pedido
  order.price=precioCarrito+precioEnvio;
  
  const id_Order = uuidv4();
  order.id=id_Order;
  order.pod_name = order.name;
  addOrder(order);
  addOrderProducts(productos,order);

  localStorage.removeItem("carrito");

  const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: order.name+' '+order.surname },
    { name: 'Card number', detail: order.creditcard_number },
    { name: 'Expiry date', detail: order.expiration_date },
  ];

  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {productos.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.description} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Cart Price" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ {precioCarrito}
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
         <ListItemText primary="Shippment" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ {precioEnvio}
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ {precioEnvio + precioCarrito}
          </Typography>          
        </ListItem>

      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{order.name} {order.surname}</Typography>
          <Typography gutterBottom>{order.pod_direction}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Review;