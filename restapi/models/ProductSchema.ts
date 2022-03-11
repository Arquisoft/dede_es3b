import { model, Schema} from 'mongoose'
import { InterfaceProduct } from '../interfaces/InterfaceProduct';

const productSchema = new Schema(
    {
        _id: {
            type: String
        },
        description: {
            type: String
        },
        name: {
            type: String,
            required: true
        }, 
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    }
)

const Product = model<InterfaceProduct>("Product", productSchema);
export default Product;