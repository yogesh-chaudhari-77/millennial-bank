const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/login', userController.login_get);
router.get('/signup', userController.signup_get);
router.post('/login/submit', userController.login_post);
router.post('/signup/submit', userController.signup_post);


module.exports = router;