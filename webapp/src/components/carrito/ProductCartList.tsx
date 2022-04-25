import { Product } from '../../shared/shareddtypes';
import { ProductCart } from '../../shared/shareddtypes';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import ProductCartItem from './ProductCartItem';
import Checkout from '../../shippment/CheckOut';

type Cart = {
    productos: ProductCart[];
    remove: (id: string) => void;
    precio: () => number;
    aumentar: (clickedItem: ProductCart) => void;
    reducir: (id: string) => void;
}

const ProductCartList: React.FC<Cart> = ({ productos, remove, precio, aumentar, reducir }) => {
    const precioCarrito = precio();
    return <Grid container direction="column" justifyContent="flex-end" alignItems="center">
        <h1>Carrito de la compra</h1>
        {productos.length > 0 ?
            productos.map((p, i) => (
                <Grid item xs={0} sm={0} md={0} key={i}>
                    <ProductCartItem props={p} remove={remove} aumentar={aumentar} reducir={reducir}></ProductCartItem>
                </Grid>)) :
            <p>No hay productos en el carrito</p>
        }
        
    </Grid>
};


export default ProductCartList;
