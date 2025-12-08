import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose }) => {
    const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        onClose();
        navigate('/checkout');
    };

    return (
        <>
            <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
            <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2 className="h3">Shopping Cart</h2>
                    <button onClick={onClose}><X size={24} /></button>
                </div>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <p className="empty-cart-msg">Your cart is empty.</p>
                    ) : (
                        cart.map((item, index) => (
                            <div key={`${item.id}-${item.color}-${item.size}`} className="cart-item">
                                <div className="cart-item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p className="variant-text">{item.color} / {item.size}</p>
                                    <div className="cart-item-actions">
                                        <div className="qty-control">
                                            <button onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity - 1)}><Minus size={14} /></button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity + 1)}><Plus size={14} /></button>
                                        </div>
                                        <span className="item-price">PKR {item.price}</span>
                                    </div>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => removeFromCart(item.id, item.color, item.size)}
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-footer">
                    <div className="cart-total">
                        <span>Subtotal</span>
                        <span>PKR {getCartTotal()}</span>
                    </div>
                    <p className="shipping-note">Shipping and taxes calculated at checkout.</p>
                    <button
                        className="btn btn-primary btn-full"
                        onClick={handleCheckout}
                        disabled={cart.length === 0}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
