const Test = require('../models/test.model');

module.exports = {
    findAll: (req, res) => {
        Test.find()
            .then(all => res.json(all))
            .catch((err) =>
                res.json({ message:"Some problems" , error: err })
    );
    },
    findOne: (req, res) => {
        Test.findOne({ _id: req.params.id })
            .then(One => {
                res.json({ general: One })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
        },

    create: (req, res) => {
        console.log(module)
        console.log(module.exports)
        console.log("Creating another!" , req.body)
        Test.create(req.body)
            .then((newlyCreated) => {
                console.log("Yay")
                res.json({ newlyCreated })
            })
            
            .catch((err) => {
                console.log("nay")
                res.status(400).json(err)
                res.json({ message: 'Something went wrong', error: err })
            });
        },

    delete: (req, res) => {
        Test.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json({ result: result })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
        },

    update: (req, res) => {
        Test.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updated => {
                res.json({ item: updated })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });}
    
};

