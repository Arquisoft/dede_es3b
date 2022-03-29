import { model, Schema} from 'mongoose'

const orderProductSchema = new Schema(
    {
        _id: {
            type: String
        }, 
        quantity: {
            type: Number,
            required: true
        },
        id_product: {
            type: String,
            required: true
        },
        id_order: {
            type: String,
            required: true
        }
    }
)

orderProductSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
    }
})

const OrderProduct = model("OrderProduct", orderProductSchema);
export default OrderProduct;