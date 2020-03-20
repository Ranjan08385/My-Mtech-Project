const router = require('express').Router();
let User = require('../login/login.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new User({ username, password });

  newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
  User.findOne({
    username: req.body.username,
    password: req.body.password
  })
    .then(user => {
      if (user) {
        const token = {
          _id: user._id,
          username: user.username,
          status: 'success',
        }
        res.send(token);
      } else {
        res.json({error: 'User does not exist'})
      }
    })
    .catch(err => {
    res.send('error: ' + err)
  })
})

module.exports = router;