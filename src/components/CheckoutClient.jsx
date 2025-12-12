'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';
// import '../pages/Checkout.css';

const CheckoutClient = () => {
    const { cart, getCartTotal } = useCart();
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        province: '',
        paymentMethod: 'cod' // 'cod' or 'advance'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subtotal = getCartTotal();
        const codFee = formData.paymentMethod === 'cod' ? 50 : 0;
        const total = subtotal + codFee;

        // Construct WhatsApp Message
        let message = `Hello KIMI, I'd like to place an order for the following items:\\n\\n`;
        message += `ORDER SUMMARY\\n--------------------\\n`;

        cart.forEach(item => {
            message += `${item.name} (${item.color}, ${item.size}) (ID: ${item.id})\\n`;
            message += `  - Qty: ${item.quantity}\\n`;
            message += `  - Price: PKR ${item.price}\\n`;
        });

        message += `--------------------\\n`;
        message += `Subtotal: PKR ${subtotal}\\n`;
        message += `Shipping: PKR 0\\n`;
        if (formData.paymentMethod === 'cod') {
            message += `COD Fee: PKR ${codFee}\\n`;
        }
        message += `\\nTotal Amount: PKR ${total}\\n`;
        message += `--------------------\\n`;
        message += `CUSTOMER DETAILS\\n`;
        message += `- Name: ${formData.name}\\n`;
        message += `- Phone: ${formData.phone}\\n`;
        message += `- Email: ${formData.email}\\n`;
        message += `- Address: ${formData.address}, ${formData.city}, ${formData.province}\\n`;
        message += `- Payment: ${formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Advance Payment'}\\n`;

        // Encode and open WhatsApp
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/message/YQJES4FOSNDVO1?text=${encodedMessage}`, '_blank');
    };

    if (cart.length === 0) {
        return (
            <div className="checkout-page container empty-cart">
                <h1 className="h2">Checkout</h1>
                <p>Your cart is empty.</p>
                <button className="btn btn-primary" onClick={() => router.push('/shop')}>Continue Shopping</button>
            </div>
        );
    }

    return (
        <div className="checkout-page container">
            <h1 className="h2 checkout-title">Checkout</h1>

            <div className="checkout-grid">
                <div className="checkout-form-section">
                    <h2 className="h3 mb-4">Shipping Details</h2>
                    <form id="checkout-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+92..."
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Address</label>
                            <input
                                type="text"
                                name="address"
                                required
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Street address"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    required
                                    value={formData.city}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Province</label>
                                <input
                                    type="text"
                                    name="province"
                                    required
                                    value={formData.province}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <h2 className="h3 mb-4 mt-8">Payment Method</h2>
                        <div className="payment-methods">
                            <label className={`payment-option ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="cod"
                                    checked={formData.paymentMethod === 'cod'}
                                    onChange={handleInputChange}
                                />
                                <div className="payment-details">
                                    <span className="payment-title">Cash on Delivery</span>
                                    <span className="payment-desc">Pay when you receive your order. +PKR 50 Fee</span>
                                </div>
                            </label>

                            <label className={`payment-option ${formData.paymentMethod === 'advance' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="advance"
                                    checked={formData.paymentMethod === 'advance'}
                                    onChange={handleInputChange}
                                />
                                <div className="payment-details">
                                    <span className="payment-title">Advance Payment</span>
                                    <span className="payment-desc">Bank Transfer / JazzCash / EasyPaisa</span>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>

                <div className="checkout-summary-section">
                    <div className="order-summary-card">
                        <h3 className="h3 mb-4">Order Summary</h3>
                        <div className="summary-items">
                            {cart.map((item, index) => (
                                <div key={`${item.id}-${index}`} className="summary-item">
                                    <div className="summary-item-left">
                                        <img src={item.image} alt={item.name} className="summary-item-image" />
                                        <div className="summary-item-info">
                                            <span className="summary-item-name">{item.name}</span>
                                            <span className="summary-item-variant">{item.color} / {item.size} x {item.quantity}</span>
                                        </div>
                                    </div>
                                    <span className="summary-item-price">PKR {item.price * item.quantity}</span>
                                </div>
                            ))}
                        </div>

                        <div className="summary-totals">
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>PKR {getCartTotal()}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            {formData.paymentMethod === 'cod' && (
                                <div className="summary-row">
                                    <span>COD Fee</span>
                                    <span>PKR 50</span>
                                </div>
                            )}
                            <div className="summary-row total">
                                <span>Total</span>
                                <span>PKR {getCartTotal() + (formData.paymentMethod === 'cod' ? 50 : 0)}</span>
                            </div>
                        </div>

                        <button type="submit" form="checkout-form" className="btn btn-primary btn-full mt-4">
                            Place Order on WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutClient;
