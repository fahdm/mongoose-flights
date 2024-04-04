const express = require('express');
const router = express.Router();
const destinationCtrl = require('../controllers/destinations');

// POST /movies/:id/reviews (create review for a movie)
router.post('/flights/:id/destinations', destinationCtrl.create);

module.exports = router;