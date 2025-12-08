import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import { useCart } from '../context/CartContext';

const Layout = () => {
    const { isCartOpen, setIsCartOpen } = useCart();

    return (
        <div className="app-layout">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
    );
};

export default Layout;
