import { TableCell, TableRow } from "@mui/material";
import { Product } from "../../../shared/shareddtypes";

type Producto = {
    product: Product;
    quantity: Number;
}

const VistaProductos: React.FC<Producto> = ({ product, quantity }) => {
    return <TableRow key={product.name}>
        <TableCell component="th" scope="row">
            {product.name}
        </TableCell>
        <TableCell>{quantity}</TableCell>
        <TableCell>{product.price}</TableCell>
    </TableRow>
};


export default VistaProductos;