import { useState, useEffect, createContext } from 'react';
import { useLocation, BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import About from './components/About/About';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer';

export const CartContext = createContext();
export const SetCartContext = createContext();

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
    <div id="app" className="relative min-h-screen">
      <BrowserRouter basename="/shopping-cart">
        <div className="pb-[452px] md:pb-[272px]">
          <CartContext.Provider value={cart}>
            <Nav />
            <ScrollToTop>
              <SetCartContext.Provider value={setCart}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/store/*" element={<Store />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
              </SetCartContext.Provider>
            </ScrollToTop>
          </CartContext.Provider>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
