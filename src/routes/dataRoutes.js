const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const rateLimiter = require('../middleware/rateLimiter');


router.get('/processData', dataController.processData);


module.exports = router;
