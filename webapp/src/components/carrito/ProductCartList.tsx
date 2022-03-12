import { Product } from '../../shared/shareddtypes';
import { ProductCart } from '../../shared/shareddtypes';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import ProductCartItem from './ProductCartItem';

type Cart = {
    productos: ProductCart[];
    remove: (id: string)=>void;
}

const ProductCartList: React.FC<Cart>= ({productos, remove}) => (
        <Grid container direction="column" justifyContent="flex-end" alignItems="center">
            <h1>Carrito de la compra</h1>
            {productos.length>0 ? 
                    productos.map((p, i) => (<ProductCartItem props={p} remove={remove}></ProductCartItem>)) :
                    <p>No hay productos en el carrito</p>
            }
        </Grid>);

export default ProductCartList;
