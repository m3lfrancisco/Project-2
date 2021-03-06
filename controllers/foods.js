const req = require('express/lib/request');
const res = require('express/lib/response');
const Food = require('../models/food');

module.exports = {
    index,
    show,
    new: newFood,
    create,
    edit,
    update,
    delete: deleteFood
};

function index(req, res) {
    Food.find({}, function(err, foods) {
        res.render('foods/index', { title: 'My Fridge', foods});
    });
};

function show(req, res) {
    Food.findById(req.params.id, function(err, food) {
        res.render('foods/show', { title: 'Food Details', food});
    });
};

function newFood(req, res) {
    res.render('foods/new', { title: 'Add Food' });
};

function create(req, res) {
    const e = req.body.expiryDate
    req.body.expiryDate = `${e.substr(5, 2)}-${e.substr(8, 2)}-${e.substr(0, 4)}`;
    const food = new Food(req.body);
    food.save(function(err) {
        if(err) return res.render('foods/new');
        res.redirect('/foods');
    });
};

function edit(req, res) {
    Food.findOne({_id: req.params.id}, function(err, food) {
        if (err || !food) return res.redirect('/foods');
        res.render('foods/edit', { title: 'Edit Food', food});
    });
};

function update(req, res) {
    const e = req.body.expiryDate
    req.body.expiryDate = `${e.substr(5, 2)}-${e.substr(8, 2)}-${e.substr(0, 4)}`;
    Food.findOneAndUpdate(
        {_id: req.params.id},
        // update object with updated properties 
        req.body,
        // options object with new: true to make sure updated doc is returned
        {new: true},
        function(err, food) {
            if (err || !food) return res.redirect('/foods');
            res.redirect(`/foods/${food._id}`);
        }
    );
};

function deleteFood(req, res, next) {
    Food.findByIdAndRemove(req.params.id, function() {
        res.redirect('/foods');
    });    
};