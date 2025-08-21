const express = require('express');
const {HomeResponse,ContactResponse} = require('../controllers/HomeControllers');
const AuthMiddleware = require('../middlewares/AuthMiddleware')
const router = express.Router();

router.get('/', AuthMiddleware, HomeResponse);
router.get('/home', AuthMiddleware,HomeResponse);
router.get('/contacts',AuthMiddleware,ContactResponse);

module.exports = router;