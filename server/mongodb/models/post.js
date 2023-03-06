import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true },
    user: {type: String, required: true},
    flag: { type: Number, required: true, default: 1}
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;