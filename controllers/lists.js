const food = require('../models/food');
const Food = require('../models/food');
const List = require('../models/list');

module.exports = {
    listIndex,
    // addList,
    create,
    show
};

// function listIndex(req, res) {
//     List.find({}).populate('foods').exec(function(err, list) {
//     res.render('lists', { title: 'My Grocery List'});
//     })
// };

function create(req, res) {
    foodId = req.params.id
    req.body.foods = foodId;
        List.create(req.body, function(err, list) {
            // res.redirect(`/lists/${foodId}`);
            res.redirect('/lists');
    });
};

function listIndex(req, res) {
    res.render('lists', {foodId: req.params.id});
}

function show(req, res) {
    List.find({foods: food._id}, function(err, list) {
        res.render('lists', list);
    });
};

// function addList(req, res) {
//     Food.findById(req.params.id, function(err, food) {
//         // if (food.lists.id) return res.redirect('/foods');
//         const list = new List()
//         console.log('This is ++++++++++++++++', list);
//         list.foods.push(req.body);
//         // list.foods.push(req.body.foodId);
//         console.log('This is ----------- ', list);
//         list.save(function(err) {
//             res.redirect('/lists');
//         });
//         // food.lists.push(req.body);
//         // food.save(function(err) {
//         //     res.redirect('/lists');
//         // });
//     });
// };