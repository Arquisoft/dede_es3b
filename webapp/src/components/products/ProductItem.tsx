
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from '../../shared/shareddtypes'

type Cart = {
    props: Product;
    add: (clickedItem: Product) => void;
}

// const { id, category, name, description, price } = props;

const ProductItem: React.FC<Cart> = ({ props, add }) => {
    // const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Portrait_of_an_Iguana.jpg/490px-Portrait_of_an_Iguana.jpg";
    const url = "https://res.cloudinary.com/asw2122/image/upload/" + props.img + ".png";
    return <Card sx={{ maxWidth: 600 }}>
        <CardMedia
            component="img"
            height="200"
            width="400"
            image={url}
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
            <Button component="button" data-testid="add" size="small" onClick={() => add(props)}>Add to Cart</Button>
        </CardActions>
    </Card>
};


export default ProductItem;