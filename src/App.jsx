import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { LoginSignup } from './Pages/LoginSignup';
import Product from './Pages/Product';
import { Cart } from './Pages/Cart';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/bracelets' element={<ShopCategory  category="bracelet" />} />
        <Route path='/accessories' element={<ShopCategory  category="accessories" />} />
        <Route path='/more' element={<ShopCategory category="more" />} />

        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>

        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;