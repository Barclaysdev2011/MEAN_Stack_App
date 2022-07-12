
import express from'express'
//import  products from './data/products.js'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFound } from './middleware/middlaeware.js'
import userRoutes from './routes/userRoutes.js'
const app = express()

dotenv.config()
app.use(express.json())
connectDb()
app.get('/',(req,res)=>{
    res.send('Api is running');
})

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 4000
app.listen(PORT,console.log('server runing in ' + process.env.NODE_ENV + 'PORT '+ PORT))
