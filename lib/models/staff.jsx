import { Schema, model, models } from "mongoose";

const StaffSchema = new Schema(
    {
        fName: {
            type: 'string',
            required: true,
            // unique: true
        },
        lName: {
            type: 'string',
            required: true,
            // unique: true
        },
        contactNo : {
            type: 'string',
            required: true,
            // unique: true
        },
        email: {
            type: 'string',
            required: true,
            // unique: true
        },
        position: {
            type: 'string',
            required: true,
            // unique: true
        },
        branchLocation: {
            type: 'string',
            required: true,
            // unique: true
        },
        profile: {
            type: 'string',
            required: true,
            // unique: true
        },
        bio: {
            type: 'string',
            required: true,
            // unique: true
        },
        funFacts: {
            type: [],
            required: true,
            // unique: true
        },
        education: {
            type: [],
            required: true,
            // unique: true
        }
    },
    {
        timestamps: true
    }

)
const Staff = models.Staff || model('Staff', StaffSchema)

export default Staff;