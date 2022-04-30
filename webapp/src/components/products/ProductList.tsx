import { Product } from '../../shared/shareddtypes';
import Grid from '@mui/material/Grid';
import ProductItem from './ProductItem';
import OrdersTableAdmin from '../orders/OrdersTableAdmin';

type Cart = {
    props: Product[];
    add: (clickedItem: Product) => void;
}

const ProductList: React.FC<Cart> = ({ props, add }) => {
    return <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {props.map((p, i) => (
            <Grid item xs={4} sm={4} md={4} key={i}>
                <ProductItem props={p} add={add}></ProductItem>
            </Grid>
        ))}
        <OrdersTableAdmin></OrdersTableAdmin>
    </Grid>
};


export default ProductList;
