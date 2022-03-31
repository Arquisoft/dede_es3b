import { Double } from 'mongodb'
import { model, Schema} from 'mongoose'

const orderSchema = new Schema(
    {

        dni: {
            type: String,
            required: true
        },
        name: {
            type: String
        }, 
        surname: {
            type: String
        },
        email: {
            type: String,
            required: true
        },
        creditcard_number: {
            type: String,
            required: true
        },
        expiration_date: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        pod_direction: {
            type: String,
            required: true
        }
    }
)

orderSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
    }
})

const Order = model("Order", orderSchema);
export default Order;