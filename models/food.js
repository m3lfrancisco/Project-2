const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: String
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
        set: function(expiryDate) {
            this._expiryDate = this.expiryDate;
            return expiryDate;
        }
    },
    dateOpened: String,
    list: [listSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Food', foodSchema);