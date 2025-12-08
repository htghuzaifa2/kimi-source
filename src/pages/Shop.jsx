import React, { useState, useEffect, useMemo, useRef, useLayoutEffect } from 'react';
import { Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { products, gamingSubCategories, productTypes } from '../data/products';
import { Filter, Grid3x3 } from 'lucide-react';
import SEO from '../components/SEO';
import { seoConfig } from '../config/seoConfig';
import './Shop.css';

const Shop = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { category, subCategory } = useParams();

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

    // Extract unique categories
    const categories = useMemo(() => ['All', ...new Set(products.map(p => p.category))], []);

    // Initialize from URL
    useEffect(() => {
        if (category) {
            // Format category name
            const formattedCategory = category.split('-').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
            setActiveCategory(formattedCategory);

            // Handle sub-category for Gaming Outfits
            if (subCategory) {
                const formattedSubCategory = subCategory.split('-').map(word =>
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
    }, [category, subCategory]);

    // Check if we're viewing Gaming Outfits sub-category selection
    const isGamingOutfitsView = activeCategory === 'Gaming Outfits' && !activeSubCategory;

    // Filter & Sort Logic
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Filter by Category
        if (activeCategory !== 'All') {
            result = result.filter(p => p.category === activeCategory);
        }

        // Filter by Sub-Category (for Gaming Outfits)
        if (activeSubCategory) {
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
            navigate('/shop');
        } else {
            const slug = cat.toLowerCase().replace(/\s+/g, '-');
            navigate(`/shop/${slug}`);
        }
        setVisiblePages([1]);
        window.scrollTo(0, 0);
    };

    const handleSubCategoryClick = (subCat) => {
        const catSlug = activeCategory.toLowerCase().replace(/\s+/g, '-');
        const subCatSlug = subCat.toLowerCase().replace(/\s+/g, '-');
        navigate(`/shop/${catSlug}/${subCatSlug}`);
        window.scrollTo(0, 0);
    };

    const minPage = Math.min(...visiblePages);
    const maxPage = Math.max(...visiblePages);

    return (
        <div className="shop-container container" ref={containerRef}>
            <SEO
                title={activeSubCategory ? `Shop ${activeSubCategory} ${activeCategory} Online | Kimi` : activeCategory === 'All' ? seoConfig.shop.title : `Shop ${activeCategory} Clothing Collection | Kimi`}
                description={activeSubCategory ? `Buy premium ${activeSubCategory} ${activeCategory} online in Pakistan. Exclusive gaming merchandise from Kimi with worldwide shipping.` : activeCategory === 'All' ? seoConfig.shop.description : `Discover our exclusive ${activeCategory.toLowerCase()} collection. Premium clothing from Pakistan's fearless fashion brand Kimi. Shop online with worldwide shipping.`}
                keywords={`${activeCategory.toLowerCase()}, ${activeSubCategory ? activeSubCategory.toLowerCase() + ',' : ''} ${seoConfig.shop.keywords}`}
                canonicalUrl={activeSubCategory ? `/shop/${activeCategory.toLowerCase().replace(/\s+/g, '-')}/${activeSubCategory.toLowerCase().replace(/\s+/g, '-')}` : activeCategory === 'All' ? '/shop' : `/shop/${activeCategory.toLowerCase().replace(/\s+/g, '-')}`}
            />

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
                <div className="shop-layout">
                    {/* Sidebar Filters (Desktop) */}
                    <aside className="shop-sidebar">
                        <div className="sidebar-section">
                            <h3 className="sidebar-title">Sort By</h3>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="sort"
                                        value="newest"
                                        checked={sortBy === 'newest'}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    />
                                    Newest Arrivals
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="sort"
                                        value="featured"
                                        checked={sortBy === 'featured'}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    />
                                    Featured
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="sort"
                                        value="price-asc"
                                        checked={sortBy === 'price-asc'}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    />
                                    Price: Low to High
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="sort"
                                        value="price-desc"
                                        checked={sortBy === 'price-desc'}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    />
                                    Price: High to Low
                                </label>
                            </div>
                        </div>

                        {/* Product Type Filter (for Gaming sub-categories) */}
                        {activeSubCategory && (
                            <div className="sidebar-section">
                                <h3 className="sidebar-title">Product Type</h3>
                                <div className="radio-group">
                                    <label className="radio-label">
                                        <input
                                            type="radio"
                                            name="productType"
                                            value="All"
                                            checked={productTypeFilter === 'All'}
                                            onChange={(e) => setProductTypeFilter(e.target.value)}
                                        />
                                        All Products
                                    </label>
                                    {productTypes.map(type => (
                                        <label key={type} className="radio-label">
                                            <input
                                                type="radio"
                                                name="productType"
                                                value={type}
                                                checked={productTypeFilter === type}
                                                onChange={(e) => setProductTypeFilter(e.target.value)}
                                            />
                                            {type}s
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>

                    {/* Mobile Filter Toggle */}
                    <div className="mobile-filter-bar">
                        <button className="btn btn-outline btn-full" onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}>
                            <Filter size={16} /> Filter & Sort
                        </button>
                    </div>

                    {/* Mobile Filter Drawer */}
                    {isMobileFilterOpen && (
                        <div className="mobile-filter-drawer">
                            <div className="sidebar-section">
                                <h3 className="sidebar-title">Sort By</h3>
                                <select
                                    className="mobile-select"
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
                                <div className="sidebar-section">
                                    <h3 className="sidebar-title">Product Type</h3>
                                    <select
                                        className="mobile-select"
                                        value={productTypeFilter}
                                        onChange={(e) => setProductTypeFilter(e.target.value)}
                                    >
                                        <option value="All">All Products</option>
                                        {productTypes.map(type => (
                                            <option key={type} value={type}>{type}s</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>
                    )}

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

export default Shop;
