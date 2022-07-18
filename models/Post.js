import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: false,    
    },
    date: {
        type: Date,
        default: Date.now,
    },
}); 

export let model = mongoose.model('Post', PostSchema);