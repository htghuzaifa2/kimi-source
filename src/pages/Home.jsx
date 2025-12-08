import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import SEO from '../components/SEO';
import { seoConfig } from '../config/seoConfig';
import './Home.css';

const Home = () => {
    const [displayProducts, setDisplayProducts] = useState([]);
    const [showLoadPrevious, setShowLoadPrevious] = useState(false);

    const masterListRef = useRef([]);
    const visibleWindowRef = useRef({ start: 0, end: 0 });
    const loadingRef = useRef(false);
    const observerRef = useRef(null);
    const loadingIndicatorRef = useRef(null);
    const scrollPreserveRef = useRef({ isPrepending: false, previousHeight: 0 });

    const BATCH_SIZE = 24;
    const MAX_VISIBLE_ITEMS = 72;

    const updateDisplay = () => {
        const { start, end } = visibleWindowRef.current;
        const slice = masterListRef.current.slice(start, end);
        setDisplayProducts(slice);
        setShowLoadPrevious(start > 0);
    };

    useEffect(() => {
        if (!products || !Array.isArray(products)) return;

        const shuffled = [...products].sort(() => 0.5 - Math.random());
        const initialBatch = shuffled.slice(0, BATCH_SIZE).map(p => ({
            ...p,
            uniqueKey: `${p.id}-${Date.now()}-${Math.random()}`
        }));

        masterListRef.current = initialBatch;
        visibleWindowRef.current = { start: 0, end: BATCH_SIZE };
        updateDisplay();
    }, []);

    useLayoutEffect(() => {
        if (scrollPreserveRef.current.isPrepending) {
            const newHeight = document.documentElement.scrollHeight;
            const diff = newHeight - scrollPreserveRef.current.previousHeight;
            window.scrollBy(0, diff);
            scrollPreserveRef.current.isPrepending = false;
        }
    }, [displayProducts]);

    const loadMore = useCallback(() => {
        if (loadingRef.current) return;
        loadingRef.current = true;

        setTimeout(() => {
            try {
                const shuffled = [...products].sort(() => 0.5 - Math.random());
                const newBatch = shuffled.slice(0, BATCH_SIZE).map(p => ({
                    ...p,
                    uniqueKey: `${p.id}-${Date.now()}-${Math.random()}`
                }));

                masterListRef.current = [...masterListRef.current, ...newBatch];

                let { start, end } = visibleWindowRef.current;
                end += BATCH_SIZE;

                if (end - start > MAX_VISIBLE_ITEMS) {
                    start = end - MAX_VISIBLE_ITEMS;
                }

                visibleWindowRef.current = { start, end };
                updateDisplay();
            } catch (error) {
                console.error("Error loading more products:", error);
            } finally {
                loadingRef.current = false;
            }
        }, 500);
    }, []);

    const loadPrevious = () => {
        scrollPreserveRef.current = {
            isPrepending: true,
            previousHeight: document.documentElement.scrollHeight
        };

        let { start, end } = visibleWindowRef.current;
        const newStart = Math.max(0, start - BATCH_SIZE);

        visibleWindowRef.current = { start: newStart, end };
        updateDisplay();
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '100px',
            threshold: 0.1
        };

        observerRef.current = new IntersectionObserver((entries) => {
            const first = entries[0];
            if (first.isIntersecting) {
                loadMore();
            }
        }, options);

        if (loadingIndicatorRef.current) {
            observerRef.current.observe(loadingIndicatorRef.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [loadMore]);

    if (!products || !Array.isArray(products)) {
        return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>Error loading products.</div>;
    }

    return (
        <div className="home-page">
            <SEO {...seoConfig.home} />

            <section className="hero">
                <div className="hero-content">
                    <h1 className="h1 hero-title">Summer Collection 2024</h1>
                    <p className="hero-subtitle">Discover the new aesthetic of modern minimalism.</p>
                    <div className="hero-actions">
                        <Link to="/collections" className="btn btn-primary">Shop Collection</Link>
                        <button className="btn btn-outline">View Lookbook</button>
                    </div>
                </div>
            </section>

            <section className="section container">
                <h2 className="h2 section-title">Just For You</h2>

                {showLoadPrevious && (
                    <div className="text-center mb-8">
                        <button onClick={loadPrevious} className="btn btn-outline load-prev-btn">
                            Load Previous Products
                        </button>
                    </div>
                )}

                <div className="product-grid">
                    {displayProducts.map((product) => (
                        <div key={product.uniqueKey} className="product-card fade-in">
                            <Link to={`/product/${product.slug}`} className="product-image-wrapper">
                                <img src={product.image} alt={product.name} className="product-image" />
                                <div className="product-overlay">
                                    <button className="btn btn-secondary quick-view-btn">View Details</button>
                                </div>
                            </Link>
                            <div className="product-info">
                                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', fontWeight: '500', marginBottom: '4px', display: 'block' }}>
                                    ID: {product.id}
                                </span>
                                <Link to={`/product/${product.slug}`} className="product-title">{product.name}</Link>
                                <div className="product-meta">
                                    <span className="product-price">PKR {product.price.toLocaleString()}</span>
                                    <div className="product-rating">★★★★★</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="loading-indicator" ref={loadingIndicatorRef}>
                    <div className="spinner"></div>
                    <p>Loading products...</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
