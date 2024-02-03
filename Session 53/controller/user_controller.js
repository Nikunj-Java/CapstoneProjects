const UserModel= require('../model/user');

//Register the USER
const addUser=async (req,res)=>{
    const {name,email,password,address,profilePic}=req.body;
    if(!name || !email || !password || !address){
        return res.status(400).json({
            message:'Name, Email, Password & Address Fields are mandatory..!!!'
        })
    }
    //check if the EmailID adready registered
    const user=await UserModel.findOne({email});
    if(user){
        return res.status(400).json({
            message:'Email ID already registered..!!!'
        })
    }
    const newUser=new UserModel({
        name,
        email,
        password,
        address,profilePic
    });
    try {
        const resp=await newUser.save();
        res.status(201).json({
            message:'User added successfully',
            data:resp
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }

}
const getAllUsers=async (req,res)=>{
    try {
        const users=await UserModel.find();//fetch data from Database
        res.status(200).json({
            message:'Users fetched successfully',
            data:users
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}
//Get User By Its Id
const getUserById= async (req,res)=>{
    const {id}=req.params;
    try {
        const user=await UserModel.findById(id);
        res.status(200).json({
            message:'User fetched successfully',
            data:user
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}
//Delete UserBy Id
const deleteUserById=async (req,res)=>{
    const {id}=req.params;
    try {
        const user=await UserModel.findByIdAndDelete(id);
        res.status(200).json({
            message:'User deleted successfully',
            data:user
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}
const updateUserById=async(req,res)=>{
    const {id}=req.params;
    try {
        const resp=await UserModel.findByIdAndUpdate(id,req.body);
        res.status(200).json({
            message:'User Updated successfully',
            data:resp
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}
const addProfile= async(req,res)=>{
    const {id}= req.params;
    const {profilePic}=req.body;
    try {
        const resp= await UserModel.findByIdAndUpdate(id,profilePic);
        res.status(200).json({
            message:'Profile Updated successfully',
            data:resp
        })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}
module.exports={addUser,getAllUsers,getUserById,deleteUserById,updateUserById,addProfile}