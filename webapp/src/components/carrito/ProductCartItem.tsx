
import { Button, Card, CardActions, CardContent, CardMedia, Typography, Input } from "@mui/material";
import { Product, ProductCart } from '../../shared/shareddtypes';
import Grid from '@mui/material/Grid';

type Cart = {
    props: ProductCart;
    remove: (id: string)=>void;
    aumentar:(clickedItem: ProductCart)=>void;
    reducir:(id: string)=>void;
}

const ProductCartItem: React.FC<Cart> = ({props, remove, aumentar, reducir}) => {
    const url = "https://res.cloudinary.com/asw2122/image/upload/" + props.img + ".png";
    return (
        <Card sx={{ maxWidth: 600 }}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item>
                    <CardMedia
                        component="img"
                        height="200"
                        width="400"
                        image={url}
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
                        <Button size="small" onClick={()=>{aumentar(props)}}>+</Button>
                        <div>
                            <div>{props.quantity}</div>
                        </div>
                        <Button size="small" onClick={()=>{reducir(props.id)}}>-</Button>
                        <Button component="button" data-testid="remove" size="small" onClick={()=>{remove(props.id)}}>Remove</Button>
                    </CardActions>
                </Grid>

            </Grid>
        </Card>);
}

export default ProductCartItem;