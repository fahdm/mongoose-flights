var express = require('express');
var router = express.Router();

var flightsCtrl = require('../controllers/flights');


/* GET users listing. */
router.get('/new',flightsCtrl.new);

router.post('/',flightsCtrl.create);

router.get('/',flightsCtrl.index);

module.exports = router;
