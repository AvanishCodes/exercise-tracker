const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    console.log(req);
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
    // res.send("Hello")
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json({success: true, status: 200, message: 'User added'}))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;