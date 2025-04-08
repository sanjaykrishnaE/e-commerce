const express = require('express');
const productController = require('../controllers/productController');
const upload = require('../middileware/multer');
const adminAuth = require('../middileware/adminAuth');


const productRouter = express.Router();

productRouter.post('/add', adminAuth, upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]), productController.addProduct);
productRouter.post('/remove', adminAuth, productController.removeProduct);
productRouter.post('/single', productController.singleProduct);
productRouter.get('/list', productController.listProduct);


module.exports = productRouter;