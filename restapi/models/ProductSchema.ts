import { model, Schema} from 'mongoose'

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

productSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
    }
})

const Product = model("Product", productSchema);
export default Product;