const express = require('express');
const {HomeResponse,ContactResponse,CreateUser} = require('../controllers/HomeControllers');
const AuthMiddleware = require('../middlewares/AuthMiddleware')
const router = express.Router();

router.get('/', AuthMiddleware, HomeResponse);
router.get('/home', AuthMiddleware,HomeResponse);
router.get('/contacts',AuthMiddleware,ContactResponse);
router.post('/create-user',AuthMiddleware,CreateUser);

module.exports = router;