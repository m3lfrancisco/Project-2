const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    foods: {type: Schema.Types.ObjectId, ref: 'Food'}
}, {
    timestamps: true
});

module.exports = mongoose.model('List', listSchema);