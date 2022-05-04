const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);