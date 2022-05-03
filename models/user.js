const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    email: String,
    avatar: String
}, {
    timestamps: true
});

passport.serializeUser(function(user, cb) {
    cb(null, user._id);
});

passport.deserializeUser(function(userId, cb) {
    User.findById(userId).then(function(user) {
        cb(null, user);
    });
});

module.exports = mongoose.model('User', userSchema);