import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    post: String,
    comment: String,
    url: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;