import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, X } from 'lucide-react';
import { products } from '../data/products';
import SEO from '../components/SEO';
import './SearchResults.css';

const SearchResults = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('q') || '');

    useEffect(() => {
        const q = searchParams.get('q');
        if (q) {
            setQuery(q);
        }
    }, [searchParams]);

    const results = useMemo(() => {
        if (!query.trim()) return [];

        const normalizedQuery = query.toLowerCase().trim();
        const words = normalizedQuery.split(/\s+/);
        const isNumericSearch = /^\d+$/.test(normalizedQuery);

        // Priority 0: Exact ID match
        if (isNumericSearch) {
            const idMatches = products.filter(p => p.id.toString() === normalizedQuery);
            if (idMatches.length > 0) return idMatches;
        }

        // Priority 1: Partial ID match
        let idPartialMatches = [];
        if (isNumericSearch) {
            idPartialMatches = products.filter(p => p.id.toString().includes(normalizedQuery));
        }

        // Priority 2: First word exact match
        let firstWordMatches = products.filter(p => {
            const name = p.name.toLowerCase();
            const nameWords = name.split(/\s+/);
            return nameWords.some(word => word.startsWith(words[0]));
        });

        // Priority 3: Any word exact match
        let anyWordMatches = products.filter(p => {
            const name = p.name.toLowerCase();
            return words.every(queryWord =>
                name.split(/\s+/).some(nameWord => nameWord.startsWith(queryWord))
            );
        });

        // Priority 4: Fuzzy match
        let fuzzyMatches = products.filter(p => {
            const searchableText = `${p.name} ${p.category} ${p.subCategory || ''} ${p.productType}`.toLowerCase();
            return words.some(word => searchableText.includes(word));
        });

        // Combine results
        const allMatches = [
            ...idPartialMatches,
            ...firstWordMatches.filter(p => !idPartialMatches.find(m => m.id === p.id)),
            ...anyWordMatches.filter(p =>
                !idPartialMatches.find(m => m.id === p.id) &&
                !firstWordMatches.find(m => m.id === p.id)
            ),
            ...fuzzyMatches.filter(p =>
                !idPartialMatches.find(m => m.id === p.id) &&
                !firstWordMatches.find(m => m.id === p.id) &&
                !anyWordMatches.find(m => m.id === p.id)
            )
        ];

        return allMatches;
    }, [query]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            setSearchParams({ q: query.trim() });
        }
    };

    const handleClearSearch = () => {
        setQuery('');
        setSearchParams({});
    };

    return (
        <div className="search-results-page">
            <SEO
                title={query ? `Search Results for "${query}" | Kimi` : 'Search Products | Kimi'}
                description={`Search results for ${query}. Find products by name, category, or ID. Premium clothing from Kimi with worldwide shipping.`}
                keywords="search products, find clothing, product search"
                canonicalUrl="/search"
            />

            <div className="container">
                <div className="search-page-header">
                    <h1 className="h2">Search Products</h1>

                    <form onSubmit={handleSearch} className="search-page-form">
                        <div className="search-page-input-wrapper">
                            <SearchIcon size={20} className="search-page-icon" />
                            <input
                                type="text"
                                className="search-page-input"
                                placeholder="Search by name, category, or ID..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            {query && (
                                <button
                                    type="button"
                                    className="search-page-clear"
                                    onClick={handleClearSearch}
                                >
                                    <X size={18} />
                                </button>
                            )}
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Search
                        </button>
                    </form>
                </div>

                {query && (
                    <div className="search-results-info">
                        <p>
                            {results.length > 0
                                ? `Found ${results.length} ${results.length === 1 ? 'product' : 'products'} for "${query}"`
                                : `No products found for "${query}"`
                            }
                        </p>
                    </div>
                )}

                {!query && (
                    <div className="search-hints-page">
                        <p className="text-muted">Start typing to search for products...</p>
                        <div className="search-suggestions">
                            <span>Try: "hoodie" or ID like "1", "2", "3"</span>
                        </div>
                    </div>
                )}

                {results.length > 0 && (
                    <div className="product-grid">
                        {results.map((product) => (
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
                )}
            </div>
        </div>
    );
};

export default SearchResults;
