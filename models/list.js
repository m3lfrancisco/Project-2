const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    name: String,
    dateCreated: String
}, {
    timestamps: true
});

module.exports = mongoose.model('List', listSchema);