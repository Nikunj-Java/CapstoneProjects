const ProductModel= require('../models/product.model');

const addProduct=async(req,res)=>{
    try {
        const {name,price,description,quantity}= req.body;
        const path=req.file.filename;
        const newProduct= new ProductModel({name,price,description,quantity,picture:path});
        await newProduct.save();

        res.status(201).json({message:"Product Added"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Some Internal Error Occured"})
    }
}
const getAllProducts=async(req,res)=>{
    try {
        const data= await ProductModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({message:"innternal Error Occured"})
    }
}

const getProductById=async(req,res)=>{
    try {
        const data= await ProductModel.findOne({_id:req.params.id});
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({message:"innternal Error Occured"})
    }
}



module.exports={addProduct,getAllProducts,getProductById}