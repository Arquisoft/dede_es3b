import { model, Schema} from 'mongoose'

const orderProductSchema = new Schema(
    {
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
        },
        pod_name: {
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