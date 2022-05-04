const Food = require('../models/food');

module.exports = {
    index,
    show,
    new: newFood,
    create
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
    const food = new Food(req.body);
    const e = req.body.expiryDate;
    req.body.expiryDate = `${e.substr(5, 2)}-${e.substr(8, 2)}-${e.substr(0, 4)}`;
    food.save(function(err) {
        if(err) return res.render('foods/new');
        res.redirect(`/foods/${food._id}`);
    });
};