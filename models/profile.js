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
}, {
    timestamps: true
});

const profileSchema = new Schema({
    name: String,
    avatar: String,
    foods: [foodSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);