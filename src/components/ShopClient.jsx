'use client';

import React, { useState, useEffect, useMemo, useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { products, gamingSubCategories, productTypes, categories as staticCategories } from '../data/products';
import { useCompare } from '../context/CompareContext';
import { Filter, Scale } from 'lucide-react';

const ShopClient = ({ categoryParam, subCategoryParam }) => {
    const { addToCompare, removeFromCompare, isInCompare } = useCompare();
    // ... existing hooks ...

    // ... (inside map) ... placeholder removed

    const pathname = usePathname();
    // const searchParams = useSearchParams(); // If we need query params

    const [sortBy, setSortBy] = useState('newest');
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeSubCategory, setActiveSubCategory] = useState(null);
    const [productTypeFilter, setProductTypeFilter] = useState('All');
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    // Windowed Pagination State
    const ITEMS_PER_PAGE = 24;
    const MAX_PAGES_IN_MEMORY = 3;
    const [visiblePages, setVisiblePages] = useState([1]);
    const [isLoading, setIsLoading] = useState(false);

    // Refs for scroll maintenance
    const containerRef = useRef(null);
    const previousScrollHeightRef = useRef(0);

    // Use static categories combined with "All"
    const categories = useMemo(() => ['All', ...staticCategories], []);

    // Initialize from Params
    useEffect(() => {
        if (categoryParam) {
            // Format category name
            const formattedCategory = categoryParam.split('-').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
            setActiveCategory(formattedCategory);

            // Handle sub-category for Gaming Outfits
            if (subCategoryParam) {
                const formattedSubCategory = subCategoryParam.split('-').map(word =>
                    word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ');
                setActiveSubCategory(formattedSubCategory);
            } else {
                setActiveSubCategory(null);
            }
        } else {
            setActiveCategory('All');
            setActiveSubCategory(null);
        }

        setVisiblePages([1]);
        setProductTypeFilter('All');
    }, [categoryParam, subCategoryParam]);

    // Check if we're viewing Gaming Outfits sub-category selection
    const isGamingOutfitsView = activeCategory === 'Gaming Outfits' && !activeSubCategory;

    // Filter & Sort Logic
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // 1. Identify if we are viewing a specific Game (Flat Route)
        // param: "Ghost of Yotei" -> matches a game in gamingSubCategories
        const activeGame = gamingSubCategories.find(game =>
            game.toLowerCase() === activeCategory.toLowerCase()
        );

        if (activeGame) {
            // Filter by subCategory (Game Name)
            result = result.filter(p => p.subCategory === activeGame);
        } else if (activeCategory !== 'All') {
            // Normal Category Filter (Men, Women, Kids, Gaming Outfits)
            result = result.filter(p => p.category === activeCategory);
        }

        // Filter by Sub-Category (Only applies if we are NOT in a flat game route, 
        // e.g. for /shop/gaming-outfits/ghost-of-yotei if that legacy route is hit, or future nested structures)
        if (activeSubCategory && !activeGame) {
            result = result.filter(p => p.subCategory === activeSubCategory);
        }

        // Filter by Product Type
        if (productTypeFilter !== 'All') {
            result = result.filter(p => p.productType === productTypeFilter);
        }

        // Sort
        switch (sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                result.sort((a, b) => b.id - a.id);
                break;
            case 'featured':
                break;
            default:
                break;
        }
        return result;
    }, [activeCategory, activeSubCategory, sortBy, productTypeFilter]);

    // Reset to page 1 when filters change
    useEffect(() => {
        if (visiblePages[0] !== 1 || visiblePages.length > 1) {
            setVisiblePages([1]);
        }
    }, [activeCategory, activeSubCategory, sortBy, productTypeFilter]);

    // Calculate total pages
    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    // Get products for visible pages
    const visibleProducts = useMemo(() => {
        const minPage = Math.min(...visiblePages);
        const maxPage = Math.max(...visiblePages);
        const startIndex = (minPage - 1) * ITEMS_PER_PAGE;
        const endIndex = maxPage * ITEMS_PER_PAGE;
        return filteredProducts.slice(startIndex, endIndex);
    }, [visiblePages, filteredProducts]);

    const handleLoadMore = () => {
        const maxPage = Math.max(...visiblePages);
        if (maxPage >= totalPages || isLoading) return;
        setIsLoading(true);
        setTimeout(() => {
            setVisiblePages(prev => {
                const newPages = [...prev, maxPage + 1];
                if (newPages.length > MAX_PAGES_IN_MEMORY) {
                    newPages.shift();
                }
                return newPages;
            });
            setIsLoading(false);
        }, 500);
    };

    const handleLoadPrevious = () => {
        const minPage = Math.min(...visiblePages);
        if (minPage <= 1 || isLoading) return;
        setIsLoading(true);
        previousScrollHeightRef.current = containerRef.current?.scrollHeight || 0;
        setTimeout(() => {
            setVisiblePages(prev => {
                const newPages = [minPage - 1, ...prev];
                if (newPages.length > MAX_PAGES_IN_MEMORY) {
                    newPages.pop();
                }
                return newPages;
            });
            setIsLoading(false);
        }, 500);
    };

    // Scroll Maintenance for Load Previous
    useLayoutEffect(() => {
        if (isLoading) return;
        const currentScrollHeight = containerRef.current?.scrollHeight || 0;
        const scrollDiff = currentScrollHeight - previousScrollHeightRef.current;
        if (scrollDiff > 0 && previousScrollHeightRef.current > 0) {
            window.scrollBy(0, scrollDiff);
            previousScrollHeightRef.current = 0;
        }
    }, [visiblePages, isLoading]);

    const handleCategoryChange = (cat) => {
        if (cat === 'All') {
            router.push('/shop');
        } else {
            const slug = cat.toLowerCase().replace(/\s+/g, '-');
            router.push(`/shop/${slug}`);
        }
        setVisiblePages([1]);
        // window.scrollTo(0, 0); // Next.js handles scrolling usually, but we can force it if needed.
    };

    const handleSubCategoryClick = (subCat) => {
        const subCatSlug = subCat.toLowerCase().replace(/\s+/g, '-');
        // Flat routing: /shop/ghost-of-yotei
        router.push(`/shop/${subCatSlug}`);
    };

    const minPage = Math.min(...visiblePages);
    const maxPage = Math.max(...visiblePages);

    return (
        <div className="shop-container container" ref={containerRef}>
            {/* Category Header */}
            <div className="category-header">
                <h1 className="h2 mb-6">{activeSubCategory || activeCategory}</h1>
                <div className="category-pills">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Gaming Outfits Sub-Categories */}
            {isGamingOutfitsView && (
                <div className="gaming-subcategories">
                    <h2 className="h3 mb-6">Select a Game</h2>
                    <div className="categories-grid">
                        {gamingSubCategories.map(game => {
                            const gameProducts = products.filter(p => p.subCategory === game);
                            if (gameProducts.length === 0) return null;

                            return (
                                <div
                                    key={game}
                                    className="category-tile"
                                    onClick={() => handleSubCategoryClick(game)}
                                >
                                    <div className="category-tile-image-wrapper">
                                        <img src={gameProducts[0].image} alt={game} className="category-tile-image" />
                                        <div className="category-tile-overlay"></div>
                                    </div>
                                    <div className="category-tile-content">
                                        <h3 className="category-tile-title">{game}</h3>
                                        <span className="category-tile-count">{gameProducts.length} Products</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Product Grid (for non-Gaming Outfits or when sub-category is selected) */}
            {!isGamingOutfitsView && (
                <div className="shop-layout-single-col">
                    {/* Top Filter Bar */}
                    <div className="shop-toolbar mb-8">
                        <div className="toolbar-group">
                            <label className="toolbar-label">Sort By:</label>
                            <select
                                className="toolbar-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="newest">Newest Arrivals</option>
                                <option value="featured">Featured</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                            </select>
                        </div>

                        {activeSubCategory && (
                            <div className="toolbar-group">
                                <label className="toolbar-label">Product Type:</label>
                                <select
                                    className="toolbar-select"
                                    value={productTypeFilter}
                                    onChange={(e) => setProductTypeFilter(e.target.value)}
                                >
                                    <option value="All">All Types</option>
                                    {productTypes.map(type => (
                                        <option key={type} value={type}>{type}s</option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>

                    {/* Product Grid & Pagination */}
                    <main className="shop-main">
                        {/* Load Previous Button */}
                        {minPage > 1 && (
                            <div className="pagination-container" style={{ marginTop: 0, marginBottom: '30px' }}>
                                <button
                                    className="btn btn-outline"
                                    onClick={handleLoadPrevious}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Loading...' : 'Load Previous Products'}
                                </button>
                            </div>
                        )}

                        <div className="product-grid">
                            {visibleProducts.map((product) => (
                                <div key={product.id} className="product-card fade-in">
                                    <Link href={`/product/${product.slug}`} className="product-image-wrapper">
                                        <img src={product.image} alt={product.name} className="product-image" />
                                        <div className="product-overlay">
                                            <button className="btn btn-secondary quick-view-btn">View Details</button>
                                            <button
                                                className={`btn btn-icon ${isInCompare(product.id) ? 'bg-primary text-white' : 'bg-white text-black'}`}
                                                style={{ marginTop: '8px', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    if (isInCompare(product.id)) {
                                                        removeFromCompare(product.id);
                                                    } else {
                                                        addToCompare(product);
                                                    }
                                                }}
                                                title={isInCompare(product.id) ? "Remove from Compare" : "Add to Compare"}
                                            >
                                                <Scale size={20} />
                                            </button>
                                        </div>
                                    </Link>
                                    <div className="product-info">
                                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', fontWeight: '500', marginBottom: '4px', display: 'block' }}>
                                            ID: {product.id}
                                        </span>
                                        <Link href={`/product/${product.slug}`} className="product-title">{product.name}</Link>
                                        <div className="product-meta">
                                            <span className="product-price">PKR {product.price.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Load More Button */}
                        {maxPage < totalPages && (
                            <div className="pagination-container">
                                <button
                                    className="btn btn-outline"
                                    onClick={handleLoadMore}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Loading...' : 'Load More Products'}
                                </button>
                            </div>
                        )}
                    </main>
                </div >
            )}
        </div >
    );
};

export default ShopClient;
