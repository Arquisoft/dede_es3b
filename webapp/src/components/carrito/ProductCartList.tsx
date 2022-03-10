import { Product } from '../../shared/shareddtypes';
import { ProductCart } from '../../shared/shareddtypes';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import ProductCartItem from './ProductCartItem';

// const productos = [
//     {
//         id: '1',
//         category: 'Ropa',
//         name: 'Chaqueta',
//         description: 'Para abrigarse',
//         price: 90
//     },
//     {
//         id: '2',
//         category: 'Material',
//         name: 'Pelota',
//         description: 'Para jugar',
//         price: 2
//     },
//     {
//         id: '3',
//         category: 'Material',
//         name: 'Pala de pádel',
//         description: 'Para jugar al pádel',
//         price: 265
//     },
//     {
//         id: '4',
//         category: 'Ropa',
//         name: 'Pantalón',
//         description: 'Para vestirse',
//         price: 45
//     },
//     {
//         id: '5',
//         category: 'Material',
//         name: 'Balón',
//         description: 'Para jugar al furbo',
//         price: 25
//     },
//     {
//         id: '6',
//         category: 'Material',
//         name: 'Guantes',
//         description: 'Para parar golitos',
//         price: 34
//     }
// ]

type Cart = {
    productos: Product[];
}

const ProductCartList: React.FC<Cart>= ({productos}) => (
        <Grid container direction="column" justifyContent="flex-end" alignItems="center">
            {productos.map((p, i) => (
                <ProductCartItem id={p.id} category={p.category} name={p.name} description={p.description} price={p.price} quantity={1}></ProductCartItem>
                
            ))}
        </Grid>);

export default ProductCartList;
