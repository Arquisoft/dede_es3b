
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from '../../shared/shareddtypes'

export default function ProductItem(props: Product) {
    const { id, category, name, description, price } = props

    return (
        <Card sx={{ maxWidth: 600 }}>
            <CardMedia
                component="img"
                height="200"
                width="400"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Portrait_of_an_Iguana.jpg/490px-Portrait_of_an_Iguana.jpg"
                alt="producto"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
                <Typography variant="h6" component="div">
                    <br></br>
                    {props.price}€
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to Cart</Button>
            </CardActions>
        </Card>
    );
}