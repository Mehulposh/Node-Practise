const express = require('express');
const {HomeResponse,ContactResponse} = require('../controllers/HomeControllers');
const AuthMiddleware = require('../middlewares/AuthMiddleware')
const router = express.Router();

router.get('/', HomeResponse);
router.get('/home',HomeResponse);
router.get('/contacts',AuthMiddleware,ContactResponse);

module.exports = router;