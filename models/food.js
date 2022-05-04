const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    expiryDate: {
        type: Date
    }
});

module.exports = mongoose.model('Food', foodSchema);