import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Store from './components/store/Store';
import About from './components/About';
import Checkout from './components/Checkout';

function App() {
  const [cartQty, setCartQty] = useState(0);

  return (
    <div id="app">
      <BrowserRouter>
        <Nav cartQty={cartQty} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store/*"
            element={<Store setCartQty={setCartQty} />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
