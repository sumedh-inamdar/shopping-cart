import { useState, useEffect } from 'react';
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Store from './components/store/Store';
import About from './components/About';
import Checkout from './components/checkout/Checkout';

function ScrollToTop(props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // eslint-disable-next-line react/prop-types
  return <>{props.children}</>;
}

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div id="app">
      <BrowserRouter>
        <Nav
          cartQty={cart.reduce(
            (previousValue, currentValue) =>
              previousValue + currentValue.quantity,
            0
          )}
        />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/store/*"
              element={<Store cart={cart} setCart={setCart} />}></Route>
            <Route path="/about" element={<About />} />
            <Route
              path="/checkout"
              element={<Checkout cart={cart} setCart={setCart} />}
            />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
