import Link from 'next/link';
import { seoConfig } from '../../config/seoConfig';

export const metadata = {
    title: seoConfig.cod.title,
    description: seoConfig.cod.description,
    keywords: seoConfig.cod.keywords,
    openGraph: {
        title: seoConfig.cod.title,
        description: seoConfig.cod.description,
        url: seoConfig.cod.canonicalUrl,
        images: [
            {
                url: seoConfig.cod.ogImage,
            },
        ],
        type: 'website',
    },
    alternates: {
        canonical: seoConfig.cod.canonicalUrl,
    },
};

export default function CODPage() {
    return (
        <div className="content-page container">
            <div className="content-header">
                <h1 className="page-title">Cash on Delivery</h1>
                <p className="page-subtitle">Pay securely at your doorstep.</p>
            </div>

            <div className="content-section">
                <h2>How It Works</h2>
                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <h3>Browse & Select</h3>
                        <p>Choose your favorite clothing items and add them to cart.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <h3>Fill Details</h3>
                        <p>Enter your shipping information at checkout.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <h3>Choose COD</h3>
                        <p>Select "Cash on Delivery" as your payment method.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">4</div>
                        <h3>Confirm Order</h3>
                        <p>Verify order details via WhatsApp confirmation.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">5</div>
                        <h3>Receive & Pay</h3>
                        <p>Inspect your order and pay cash to the delivery rider.</p>
                    </div>
                </div>
            </div>

            <div className="content-card mt-12 text-center">
                <h2>COD Service Fee</h2>
                <p className="text-xl mb-4">A standard convenience fee of <strong>PKR 50</strong> applies to all COD orders.</p>
                <p className="text-subtle mb-8">Want to save this fee? Use our advance payment options for free!</p>
                <Link href="/shipping" className="btn btn-outline">View Payment Methods</Link>
            </div>

            <div className="content-section mt-12">
                <h2>Why Choose COD?</h2>
                <div className="content-grid-layout">
                    <div className="feature-item">
                        <h3>🛡️ Safe & Secure</h3>
                        <p>Pay only after inspecting your order</p>
                    </div>
                    <div className="feature-item">
                        <h3>📦 Inspect First</h3>
                        <p>Check the product quality before payment</p>
                    </div>
                    <div className="feature-item">
                        <h3>💰 No Advance Payment</h3>
                        <p>Zero financial risk until you receive your order</p>
                    </div>
                    <div className="feature-item">
                        <h3>✅ Easy & Convenient</h3>
                        <p>No need for online banking or cards</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
