const express = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const { getAllUsers, CreateUser, getUserById } = require('../controllers/UserController');


const router = express.Router();


router.post('/create-user',AuthMiddleware,CreateUser);
router.get('/getAllUsers',AuthMiddleware,getAllUsers);
router.get('/getUserById/:id',AuthMiddleware,getUserById);
module.exports = router;