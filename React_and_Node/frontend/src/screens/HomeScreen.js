import React,{useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
import { useDispatch,useSelector } from 'react-redux'
import {listProduct} from '../action/productAction.js'
import Message from '../Message'
import Loader from '../components/Loader'
const HomeScreen = () => {

  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList)
  const {products,loading,error} = productList
  useEffect(()=>{
    dispatch(listProduct())
    console.log('heelllo')
  },[dispatch])
  return (
    <>
    <h1>Latest products</h1>
    {loading ? (<Loader></Loader>):error?(<Message variant='danger'>{error}</Message>):products.length >0?(<Row>
    
    {products.map(product=>(
        <Col sm={12} md={6} lg={4} key={product._id}>
         <Product product={product} ></Product>
        </Col>
    ))}
</Row>):<h2>No data Available</h2>}
    
    </>
  )
}

export default HomeScreen