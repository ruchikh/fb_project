const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');


router.get('/', (req, res)=>{
  res.render('index');
})


router.get('/article/:id', (req, res)=>{
  res.render('index');
})

router.get('/signup', (req, res)=>{
  res.render('index');
})

router.get('/signin', (req, res)=>{
  res.render('index');
})

router.post('/api/signin', postController.loginUser);
router.post('/api/signup', postController.createUser);
router.post('/api/article', postController.createPost);
router.get('/api/article', postController.getAllArticle);
router.get('/api/article/:id', postController.getSingleArticle);
router.delete('/api/article/:id', postController.deletePost);
router.post('/api/article/:id/comment', postController.addComment);
router.get('/api/isLoggedIn', postController.isLoggedIn)
router.get('/api/logout', postController.loggedOut)


module.exports =router;