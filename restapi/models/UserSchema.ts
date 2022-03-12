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
        returnedObject.id = returnedObject._id
        delete returnedObject._id
    }
})

const User = model("User", userSchema);
export default User;