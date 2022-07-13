import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generatetoken from '../utils/generatetoken.js' 
  
const authUser =asyncHandler(async(req,res)=>{

    const {email,password } = req.body
    const user = await User.findOne({email})
    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generatetoken(user._id)
        })
    }else{
        res.status(404)
        throw new Error('invalid email or password')
    }
})


const registerUser =asyncHandler(async(req,res)=>{

    const {name,email,password } = req.body
    const userexist = await User.findOne({email})
   if(userexist){
    res.status(400)
    throw new Error('user already exist')
   }
   const user = await User.create({
    name,email,password
   })
   if(user){
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token:generatetoken(user._id)
    })
   }else{
    res.status(400)
    throw new Error('user not found')
}
})

const getUserProfile =asyncHandler(async(req,res)=>{

    const user = await User.findById(req.body._id)
     if(user){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })
     }else{
        res.status(404)
        throw new Error('user not found')
     }
})

export {authUser,getUserProfile,registerUser}