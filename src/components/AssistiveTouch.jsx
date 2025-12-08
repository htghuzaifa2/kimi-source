import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { X, Circle } from 'lucide-react';
import './AssistiveTouch.css';

const AssistiveTouch = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // State
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: window.innerWidth - 70, y: window.innerHeight - 140 });
    const [isDragging, setIsDragging] = useState(false);
    const [isIdle, setIsIdle] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [radius, setRadius] = useState(window.innerWidth < 768 ? 110 : 140); // Responsive radius

    // Refs
    const dragStartPos = useRef({ x: 0, y: 0 });
    const dragStartTime = useRef(0);
    const idleTimer = useRef(null);
    const lastRotationPos = useRef(null);
    const velocity = useRef(0);
    const animationFrame = useRef(null);
    const isInteractingWithMenu = useRef(false);

    // Constants
    const DRAG_THRESHOLD = 5;
    const CLICK_TIMEOUT = 200;
    const FRICTION = 0.95;
    const ANGLE_STEP = 30;

    // Menu Items (Text Only)
    const menuItems = [
        { label: 'Shop', path: '/shop' },
        { label: 'All Products', path: '/shop' },
        { label: 'New Arrivals', path: '/shop' },
        { label: 'Accessories', path: '/collections/accessories' },
        { label: 'FAQ', path: '/faq' },
        { label: 'Shipping Policy', path: '/shipping' },
        { label: 'Returns & Refunds', path: '/returns' },
        { label: 'Cash on Delivery', path: '/cod' },
        { label: 'Contact Us', path: '/contact' },
        { label: 'About Us', path: '/about' },
        { label: 'Terms of Service', path: '/terms' },
        { label: 'Privacy Policy', path: '/privacy' },
    ];

    // --- Idle Timer ---
    const resetIdleTimer = () => {
        setIsIdle(false);
        if (idleTimer.current) clearTimeout(idleTimer.current);
        idleTimer.current = setTimeout(() => {
            if (!isOpen && !isDragging && !isInteractingWithMenu.current) setIsIdle(true);
        }, 2500);
    };

    useEffect(() => {
        resetIdleTimer();
        window.addEventListener('pointerdown', resetIdleTimer);
        window.addEventListener('pointermove', resetIdleTimer);
        return () => {
            if (idleTimer.current) clearTimeout(idleTimer.current);
            window.removeEventListener('pointerdown', resetIdleTimer);
            window.removeEventListener('pointermove', resetIdleTimer);
            if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
        };
    }, [isOpen, isDragging]);

    // --- Window Resize & Route Change ---
    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            setRadius(isMobile ? 110 : 140);

            setPosition(prev => ({
                x: Math.min(prev.x, window.innerWidth - 60),
                y: Math.min(prev.y, window.innerHeight - 60)
            }));
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // --- Ball Drag Logic (PointerEvents) ---
    const handlePointerDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        dragStartPos.current = { x: e.clientX, y: e.clientY };
        dragStartTime.current = Date.now();

        e.target.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!e.buttons) return;

        const deltaX = e.clientX - dragStartPos.current.x;
        const deltaY = e.clientY - dragStartPos.current.y;

        if (!isDragging && (Math.abs(deltaX) > DRAG_THRESHOLD || Math.abs(deltaY) > DRAG_THRESHOLD)) {
            setIsDragging(true);
        }

        if (isDragging) {
            const newX = position.x + deltaX;
            const newY = position.y + deltaY;

            const maxX = window.innerWidth - 55;
            const maxY = window.innerHeight - 55;

            setPosition({
                x: Math.max(0, Math.min(newX, maxX)),
                y: Math.max(0, Math.min(newY, maxY))
            });

            dragStartPos.current = { x: e.clientX, y: e.clientY };
        }
        resetIdleTimer();
    };

    const handlePointerUp = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.target.releasePointerCapture(e.pointerId);

        const duration = Date.now() - dragStartTime.current;
        if (!isDragging && duration < CLICK_TIMEOUT) {
            setIsOpen(prev => !prev);
        }

        setTimeout(() => setIsDragging(false), 50);
        resetIdleTimer();
    };

    // --- Menu Rotation Logic (Inertia) ---
    const startRotation = (e) => {
        if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
        isInteractingWithMenu.current = true;
        lastRotationPos.current = { x: e.clientX, y: e.clientY };
        velocity.current = 0;
        e.target.setPointerCapture(e.pointerId);
    };

    const moveRotation = (e) => {
        if (!lastRotationPos.current) return;

        const deltaX = e.clientX - lastRotationPos.current.x;
        const deltaY = e.clientY - lastRotationPos.current.y;

        const delta = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY;

        setRotation(prev => prev + delta * 0.5);
        velocity.current = delta * 0.5;

        lastRotationPos.current = { x: e.clientX, y: e.clientY };
        resetIdleTimer();
    };

    const endRotation = (e) => {
        isInteractingWithMenu.current = false;
        lastRotationPos.current = null;
        e.target.releasePointerCapture(e.pointerId);

        const runInertia = () => {
            if (Math.abs(velocity.current) < 0.05) return;

            velocity.current *= FRICTION;
            setRotation(prev => prev + velocity.current);
            animationFrame.current = requestAnimationFrame(runInertia);
        };
        runInertia();
    };

    // Wheel Handler
    const handleMenuWheel = (e) => {
        e.stopPropagation();
        setRotation(prev => prev + (e.deltaY * -0.2));
        resetIdleTimer();
    };

    // Helper for circular positioning
    const getItemStyle = (index) => {
        const currentAngle = (index * ANGLE_STEP) + rotation;
        const radian = currentAngle * (Math.PI / 180);

        return {
            transform: `translate(${Math.cos(radian) * radius}px, ${Math.sin(radian) * radius}px)`,
        };
    };

    return (
        <>
            {isOpen && <div className="assistive-overlay" onClick={() => setIsOpen(false)} />}

            <div
                className={`assistive-container ${isOpen ? 'open' : ''} ${isIdle ? 'idle' : ''}`}
                style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            >
                {/* The Ball */}
                <div
                    className="assistive-ball"
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                >
                    {isOpen ? <X size={24} color="white" /> : <Circle size={16} fill="white" color="white" />}
                </div>

                {/* The Menu Ring */}
                <div
                    className={`assistive-ring ${isOpen ? 'visible' : ''}`}
                    onWheel={handleMenuWheel}
                    onPointerDown={startRotation}
                    onPointerMove={moveRotation}
                    onPointerUp={endRotation}
                    onPointerCancel={endRotation}
                >
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="assistive-item"
                            style={getItemStyle(index)}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(false);
                            }}
                            onPointerDown={(e) => e.stopPropagation()}
                        >
                            <span className="assistive-item-label">{item.label}</span>
                        </Link>
                    ))}

                    {/* Center Hint */}
                    <div className="assistive-hint">
                        <span>Drag Ring<br />to Spin</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AssistiveTouch;
