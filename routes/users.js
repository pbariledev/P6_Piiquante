var express = require('express');
const { route } = require('.');

var router = express.Router();

const userCtrl = require('../controllers/user');

route.post('/signup', userCtrl.signup);
route.post('/login ', userCtrl.login);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('reponse test');
});

module.exports = router;
