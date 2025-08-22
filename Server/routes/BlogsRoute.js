const express = require('express');
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const { createBlog, getAllBlogs, getBlogById, deleteBlog } = require('../controllers/BlogsController');

const router = express.Router();

router.get('/createblog', AuthMiddleware, createBlog);
router.get('/getAllBlogs', AuthMiddleware,getAllBlogs);
router.get('/getBlogById/:id',AuthMiddleware,getBlogById);
router.get('/delete/:id',AuthMiddleware,deleteBlog);


module.exports = router;