import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import connectDb from "./config/db.js";

dotenv.config()

connectDb()

const importData = async ()=>{
    try{
       await Order.deleteMany()
       await Product.deleteMany()
       await User.deleteMany()
      const createdUser =  await User.insertMany(users)

      const adminUser = createdUser[0]._id
      const sampleProduct = products.map(product=>{
        return {...product,user:adminUser}
      })
      await Product.insertMany(sampleProduct)
      console.log('Data imported')
      process.exit(1)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}
const destroyData = async ()=>{
    try{
       await Order.deleteMany()
       await Product.deleteMany()
       await User.deleteMany()
   
      console.log('destroy Data')
      process.exit(1)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}
if(process.argv[2]='-d'){
    //destroyData()
    importData()
}else{
    importData()
}