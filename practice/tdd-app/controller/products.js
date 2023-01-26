const productModel = require('../models/Products');
exports.createProduct = async (req, res, next) => {
  try{
    const createdProduct = await productModel.create(req.body)
    // console.log('createdProduct', createdProduct);      
    res.status(201).json(createdProduct);
  } catch(error){
    next(error);
  }
};