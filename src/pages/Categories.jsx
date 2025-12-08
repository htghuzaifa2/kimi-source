import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import SEO from '../components/SEO';
import { seoConfig } from '../config/seoConfig';
import './Categories.css';

const Categories = () => {
    const uniqueCategories = [...new Set(products.map(p => p.category))];

    const categoriesData = uniqueCategories.map(cat => {
        const product = products.find(p => p.category === cat);
        return {
            name: cat,
            image: product ? product.image : '',
            count: products.filter(p => p.category === cat).length
        };
    });



    return (
        <div className="content-page container categories-page">
            <SEO {...seoConfig.categories} />
            <div className="content-header text-center">
                <h1 className="h2">Browse Categories</h1>
                <p className="text-muted">Explore our wide range of premium collections.</p>
            </div>

            <div className="categories-grid">
                {categoriesData.map((cat) => (
                    <Link to={`/shop/${cat.name.toLowerCase().replace(/\s+/g, '-')}`} key={cat.name} className="category-tile">
                        <div className="category-tile-image-wrapper">
                            <img src={cat.image} alt={cat.name} className="category-tile-image" />
                            <div className="category-tile-overlay"></div>
                        </div>
                        <div className="category-tile-content">
                            <h3 className="category-tile-title">{cat.name}</h3>
                            <span className="category-tile-count">{cat.count} Products</span>
                        </div>
                    </Link>
                ))}
            </div>


        </div>
    );
};

export default Categories;
