const express = require('express');
const {HomeResponse,ContactResponse} = require('../controllers/HomeControllers');
const router = express.Router();

router.get('/', HomeResponse);
router.get('/home',HomeResponse);
router.get('/contacts',ContactResponse);

module.exports = router;