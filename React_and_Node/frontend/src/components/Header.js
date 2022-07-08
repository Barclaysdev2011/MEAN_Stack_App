import React from 'react'
import { Navbar, Nav,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <Navbar bg="info" variant='info' expand="lg" collapseOnSelect>
  <Container>
    <Navbar.Brand href="#home">ProShop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Link to="/cart" ><i className='fas fa-shopping-cart'></i>Cart</Link>
        <Link to="/login"><i className='fas fa-user'></i>Sign In</Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header