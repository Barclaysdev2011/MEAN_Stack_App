import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './components/CartScreen';
import LoginScreen from './components/LoginScreen';

function App() {
  return (
    <Router>
    <Header></Header>
    <main className='py-3'>
      <Container>
       <Routes>
        <Route path='/login' element={<LoginScreen/>} exact></Route>
        <Route path='/product/:id' element={<ProductScreen/>}></Route>
        <Route path='/cart/:id' element={<CartScreen/>}></Route>
        <Route path='/' element={<HomeScreen/>} exact></Route>
       </Routes>
      </Container>
    </main>
    <Footer></Footer>
    </Router>
  );
}

export default App;
