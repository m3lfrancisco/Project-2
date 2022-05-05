const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }
    // list: [{type: Schema.Types.ObjectId, ref: 'List'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Food', foodSchema);