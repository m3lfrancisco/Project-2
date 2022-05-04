const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    googleId: {
        type: String,
        required: true
    },
    profile: {
        type: Schema.Types.ObjectId, ref: 'Profile'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);