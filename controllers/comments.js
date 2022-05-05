const Food = require('../models/food');

module.exports = {
    create,
    delete: deleteComment
};

function create(req, res) {
    Food.findById(req.params.id, function(err, food) {
        food.comments.push(req.body);
        food.save(function(err) {
            res.redirect(`/foods/${food._id}`);
        });
    });
};

function deleteComment(req, res, next) {
    Food.findOne({'comments._id': req.params.id}).then(function(food) {
        const comment = food.comments.id(req.params.id);
        comment.remove();
        food.save().then(function() {
            res.redirect(`/foods/${food._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });
};