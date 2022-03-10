
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Input } from "@mui/material";
import { Product, ProductCart } from '../../shared/shareddtypes';
import Grid from '@mui/material/Grid';



function ProductCartItem(props: ProductCart) {
    const { id, category, name, description, price, quantity } = props

    return (
        <Card sx={{ maxWidth: 600 }}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item>
                    <CardMedia
                        component="img"
                        height="200"
                        width="400"
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Portrait_of_an_Iguana.jpg/490px-Portrait_of_an_Iguana.jpg"
                        alt="producto"
                    />
                </Grid>
                <Grid item>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.description}
                        </Typography>
                        <Typography variant="h6" component="div">
                            
                            {props.price}€
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={()=>{props.quantity+=1}}>+</Button>
                        <div>
                            <div>{props.quantity}</div>
                        </div>
                        <Button size="small" onClick={()=>{props.quantity-=1}}>-</Button>
                        <Button size="small">Remove</Button>
                    </CardActions>
                </Grid>
            
            </Grid>
        </Card>);
}

export default ProductCartItem;