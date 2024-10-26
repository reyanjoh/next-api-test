import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema(
    {
        title: {
            type: 'string',
            required: true,
            unique: true
        },
        description: {
            type: 'string',
            required: true,
            unique: true
        },
        body: {
            type: 'string',
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    }

)
const Blog = models.Blog || model('Blog', BlogSchema)

export default Blog;