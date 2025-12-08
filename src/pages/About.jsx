import React from 'react';
import SEO from '../components/SEO';
import { seoConfig } from '../config/seoConfig';
import './ContentPage.css';

const About = () => {
    return (
        <div className="content-page container">
            <SEO {...seoConfig.about} />
            <div className="content-header">
                <h1 className="page-title">About Us</h1>
                <p className="page-subtitle">Wear Without Fear — Unleash Your True Style</p>
            </div>

            <div className="content-section">
                <p className="lead-text">Welcome to <strong>Kimi</strong>, Pakistan's premium clothing brand dedicated to fearless fashion. We're not just a clothing brand— we're a movement empowering you to express yourself boldly and dress without limits.</p>
            </div>

            <div className="content-grid-layout">
                <div className="content-card">
                    <h2>Who We Are</h2>
                    <p>Kimi was born from the belief that fashion should be accessible, authentic, and unapologetically bold. From trendy streetwear to timeless classics, we offer a curated collection of high-quality apparel designed for those who dare to stand out.</p>
                </div>

                <div className="content-card">
                    <h2>Our Vision</h2>
                    <p>To become Pakistan's most loved clothing brand, inspiring confidence and self-expression through fashion that breaks boundaries and celebrates individuality.</p>
                </div>
            </div>

            <div className="content-section mt-12">
                <h2>Why Choose Kimi</h2>
                <div className="content-grid-layout mt-8">
                    <div className="feature-item">
                        <h3>🔥 Fearless Designs</h3>
                        <p>Bold, unique styles that make a statement and reflect your personality.</p>
                    </div>
                    <div className="feature-item">
                        <h3>✨ Premium Quality</h3>
                        <p>Superior fabrics and craftsmanship that ensure comfort and durability.</p>
                    </div>
                    <div className="feature-item">
                        <h3>🇵🇰 Made in Pakistan</h3>
                        <p>Proudly designed and crafted in Pakistan, supporting local artisans.</p>
                    </div>
                    <div className="feature-item">
                        <h3>🚀 Fast Delivery</h3>
                        <p>Quick and reliable shipping across all of Pakistan.</p>
                    </div>
                </div>
            </div>

            <div className="content-section">
                <h2>Our Commitment</h2>
                <p>At Kimi, we're committed to delivering exceptional quality and style while staying true to our roots. Every piece in our collection is thoughtfully designed to help you express your unique identity with confidence.</p>
                <p className="mt-4 font-bold"><strong>Kimi — Wear Without Fear. Pakistan's Premium Clothing Brand.</strong></p>
            </div>
        </div>
    );
};

export default About;
