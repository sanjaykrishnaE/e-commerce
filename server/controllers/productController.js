const { v2: cloudinary } = require('cloudinary');
const { json } = require('express');
const productModel = require('../models/productModel');

//function for add product
async function addProduct(req, res) {
    try {
        
        const { name, description, price, sizes, category, subCategory, bestseller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((item) => item !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type:'image'});
                return result.secure_url;
            })
        )

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === 'true' ? true : false,
            image: imagesUrl,
            date: Date.now()
        }

        const product = new productModel(productData);
        await product.save();
        
        res.json({success: true , message:'Product added successfully'})

    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message});
    }
}

async function listProduct(req, res) {
    try {

        const products = await productModel.find({});
        res.json({success:true, products});
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message});
    }
}

async function removeProduct(req, res) {
    try {

        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:'Product removed successfully'});
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message});
    }
}


async function singleProduct(req, res) {
    try {

        const { productId } = req.body;
        const product = await productModel.findById(productId);

        res.json({success:true, product});
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message:error.message});
    }
}

module.exports = {
    addProduct,
    listProduct,
    removeProduct,
    singleProduct,
}