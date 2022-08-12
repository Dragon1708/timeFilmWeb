import mongoose from 'mongoose';

const ArticleSchema =mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
    },
    content: {
        type: String,
        required: true,
        unique: true
    },
    tags:{
        type: Array,
        default: [],
    },
    viewCount: {
        type: Number,
        default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true,
})

export default mongoose.model("Article", ArticleSchema)