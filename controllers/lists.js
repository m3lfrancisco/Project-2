const Food = require('../models/food');
const List = require('../models/list');

module.exports = {
    new: newList,
    create,
    listIndex,
    // addToList,   
    show
};

function newList(req, res) {
    const newList = new List();
    res.render('lists/new', { title: 'New List', newList});
};

function create(req, res) {
    const d = req.body.dateCreated
    req.body.dateCreated = `${d.substr(5, 2)}-${d.substr(8, 2)}-${d.substr(0, 4)}`;
    const list = new List(req.body);
    console.log('This is a list +++++++++++', list);
    list.save(function(err) {
        if(err) return res.render('lists/new');
        res.redirect('lists');
    });
};

function listIndex(req, res) {
    List.find({}, function(err, lists) {
        res.render('lists', { title: 'My Grocery Lists', lists});
    });
};

// function show(req, res) {
//     List.find({foods: food._id}, function(err, list) {
//         res.render('lists/:id', list);
//     });
// };

function show(req, res) {
    List.findById(req.params.id, function(err, list) {
        Food.find({list: list._id}, function(err, foods) {
            res.render('lists/show', { title: 'List Details', list, foods});
        });
    });
};

// function addToList(req, res) {
//     List.findById(req.params.id, function(err, list) {
//         list.foods.push(req.body);
//         list.save(function(err) {
//             res.redirect(`/lists/${list._id}`);
//         });
//     });
// };

// function listIndex(req, res) {
//     List.find({}).populate('foods').exec(function(err, list) {
//     res.render('lists', { title: 'My Grocery List'});
//     })
// };

// function create(req, res) {
//     foodId = req.params.id
//     req.body.foods = foodId;
//     const d = req.body.dateCreated
//     req.body.dateCreated = `${d.substr(5, 2)}-${d.substr(8, 2)}-${d.substr(0, 4)}`;
//         List.create(req.body, function(err, list) {
//             console.log('This is a list ++++++++++', list);
//             // res.redirect(`/lists/${foodId}`);
//             res.redirect('lists');
//     });
// };

// function addList(req, res) {
//     List.findById(req.params.id, function(err, food) {
//         if (food.lists.id) return res.redirect('/foods');
//         const list = new List(req.body)
//         console.log('This is ++++++++++++++++', list);
//         list.foods.push(req.body);
//         list.foods.push(req.body.foodId);
//         console.log('This is ----------- ', list);
//         list.save(function(err) {
//             res.redirect('/lists');
//         });
//         food.lists.push(req.body);
//         food.save(function(err) {
//             res.redirect('/lists');
//         });
//     });
// };