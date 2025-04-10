const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();


userRouter.post('/signup',userController.signupUser);
userRouter.post('/signin',userController.signinUser);
userRouter.post('/admin',userController.adminLogin);

module.exports = userRouter;

