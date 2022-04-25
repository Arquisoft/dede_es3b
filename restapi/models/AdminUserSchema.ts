import { model, Schema} from 'mongoose'

const adminUserSchema = new Schema(
    {
        username: {
            type: String,
			required: true,
        },
        password: {
            type: String,
            required: true
        }
    }
)

adminUserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Admin = model("Admin", adminUserSchema);
export default Admin;