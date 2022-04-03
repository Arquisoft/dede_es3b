import { model, Schema} from 'mongoose'

const userSchema = new Schema(
    {
        dni: {
            type: String,
			required: true,
			unique:true
        },
        name: {
            type: String,
            required: true
        }, 
        email: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        }
    }
)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const User = model("User", userSchema);
export default User;