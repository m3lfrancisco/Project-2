const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number
    }
}, {
    timestamps: true
});

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: Number,
    expiryDate: {
        type: String,
        // set: function(expiryDate) {
        //     this._expiryDate = this.expiryDate;
        //     return expiryDate;
        // }
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Food', foodSchema);