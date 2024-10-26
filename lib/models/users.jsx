import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
    {
        firstName: {
            type: 'string',
            required: true,
            unique: true
        },
        lastName: {
            type: 'string',
            required: true,
            unique: true
        },
        email: {
            type: 'string',
            required: true,
            unique: true
        },
        username: {
            type: 'string',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }

)
const User = models.User || model('User', UserSchema)

export default User;