import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Categories from './pages/Categories';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import COD from './pages/COD';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import SizeGuide from './pages/SizeGuide';
import SearchResults from './pages/SearchResults';
import AssistiveTouch from './components/AssistiveTouch';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <CartProvider>
          <Router>
            <ScrollToTop />
            <AssistiveTouch />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="shop/:category" element={<Shop />} />
                <Route path="shop/:category/:subCategory" element={<Shop />} />
                <Route path="collections" element={<Categories />} />
                <Route path="collections/:category" element={<Shop />} />
                <Route path="product/:slug" element={<Product />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="shipping" element={<Shipping />} />
                <Route path="returns" element={<Returns />} />
                <Route path="cod" element={<COD />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="terms" element={<Terms />} />
                <Route path="privacy" element={<Privacy />} />
                <Route path="size-guide" element={<SizeGuide />} />
                <Route path="search" element={<SearchResults />} />
              </Route>
            </Routes>
          </Router>
        </CartProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
