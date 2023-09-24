import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductCart from './components/ProductCart';

function App() {

  return (
    <div className="App">
      
      <Nav/>
      <Routes>
                <Route path='/' element={<Home/>}  />
                <Route path='/about' element={<About/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/products/details' element={<ProductDetails/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/productCart' element={<ProductCart/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
