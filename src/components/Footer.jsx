import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4 className="footer-heading">Shop</h4>
                        <ul>
                            <li><Link to="/shop">All Products</Link></li>
                            <li><Link to="/shop?sort=newest">New Arrivals</Link></li>
                            <li><Link to="/shop?category=Accessories">Accessories</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-heading">Support</h4>
                        <ul>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/shipping">Shipping Policy</Link></li>
                            <li><Link to="/returns">Returns & Refunds</Link></li>
                            <li><Link to="/cod">Cash on Delivery</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-heading">Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 KIMI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
