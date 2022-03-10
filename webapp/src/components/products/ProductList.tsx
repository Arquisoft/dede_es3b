import { Product } from '../../shared/shareddtypes';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import ProductItem from './ProductItem';

const productos = [
    {
        id: '1',
        category: 'Ropa',
        name: 'Chaqueta',
        description: 'Para abrigarse',
        price: 90
    },
    {
        id: '2',
        category: 'Material',
        name: 'Pelota',
        description: 'Para jugar',
        price: 2
    },
    {
        id: '3',
        category: 'Material',
        name: 'Pala de pádel',
        description: 'Para jugar al pádel',
        price: 265
    },
    {
        id: '4',
        category: 'Ropa',
        name: 'Pantalón',
        description: 'Para vestirse',
        price: 45
    },
    {
        id: '5',
        category: 'Material',
        name: 'Balón',
        description: 'Para jugar al furbo',
        price: 25
    },
    {
        id: '6',
        category: 'Material',
        name: 'Guantes',
        description: 'Para parar golitos',
        price: 34
    }
]

type Cart = {
    add: (clickedItem: Product)=>void;
}

const ProductList: React.FC<Cart> = ({add}) => (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {productos.map((p, i) => (
            <Grid item xs={4} sm={4} md={4} key={i}>
                <ProductItem id={p.id} category={p.category} name={p.name} description={p.description} price={p.price} add = {add}></ProductItem>
            </Grid>
        ))}
    </Grid>);


export default ProductList;
