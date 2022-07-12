import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

const authUser =asyncHandler(async(req,res)=>{
    console.log('hell')
    const {email,password } = req.body
    const user = await User.findOne({email})
    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:null
        })
    }else{
        res.status(404)
        throw new Error('invalid email or password')
    }
})

export {authUser}