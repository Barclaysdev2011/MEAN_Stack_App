import React,{useEffect}from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row,Col,ListGroup,Image,Form,Button,Card } from 'react-bootstrap'
import Message from '../Message'
import { addToCart } from '../action/cartAction'
import { useLocation } from 'react-router-dom';
import {
  useParams
} from "react-router-dom";
const CartScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const qty = location.search? location.search.split('=')[1]:1
  const dispatch  = useDispatch()
  const cart = useSelector(state=>state.cart)
  const {cartItems} = cart
  useEffect(()=>{
    if(id){
      dispatch(addToCart(id,qty))
    }
  },[dispatch,id,qty])
  console.log(qty)
  return (
    <Row >
      <Col md={8}>
        <h1>Shopping cart</h1>
        {cartItems && cartItems.length===0?<Message>Your cart is empty</Message>:<h5>here</h5>}
      </Col>
      <Col md={2}></Col>
      <Col md={2}></Col>
    </Row>
  )
}

export default CartScreen