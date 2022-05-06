const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: Number   
}, {
    timestamps: true
});

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: Number,
    expiryDate: String,
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Food', foodSchema);