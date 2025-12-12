import { seoConfig } from '../../config/seoConfig';

export const metadata = {
    title: seoConfig.shipping.title,
    description: seoConfig.shipping.description,
    keywords: seoConfig.shipping.keywords,
    openGraph: {
        title: seoConfig.shipping.title,
        description: seoConfig.shipping.description,
        url: seoConfig.shipping.canonicalUrl,
        images: [
            {
                url: seoConfig.shipping.ogImage,
            },
        ],
        type: 'website',
    },
    alternates: {
        canonical: seoConfig.shipping.canonicalUrl,
    },
};

export default function ShippingPage() {
    return (
        <div className="content-page container">
            <div className="content-header">
                <h1 className="page-title">Shipping Policy</h1>
                <p className="page-subtitle">Fast, safe, and reliable delivery across Pakistan.</p>
            </div>

            <div className="content-grid-layout">
                <div className="content-card">
                    <div className="icon-wrapper">📦</div>
                    <h2>Shipping Charges</h2>
                    <ul className="bullet-list">
                        <li><strong>FREE Delivery</strong> on all orders above <strong>PKR 5,000</strong></li>
                        <li>For orders below PKR 5,000, a delivery fee of <strong>PKR 200</strong> applies</li>
                        <li>Shipping cost is shown at checkout before payment</li>
                    </ul>
                </div>

                <div className="content-card">
                    <div className="icon-wrapper">💳</div>
                    <h2>Payment Methods</h2>
                    <p>We accept Advance Payment via:</p>
                    <ul className="bullet-list">
                        <li>EasyPaisa</li>
                        <li>JazzCash</li>
                        <li>Bank Transfer</li>
                    </ul>
                    <p className="mt-4">Cash on Delivery (COD) also available (Fee: <strong>PKR 50</strong>)</p>
                </div>

                <div className="content-card">
                    <div className="icon-wrapper">⏰</div>
                    <h2>Delivery Timeframe</h2>
                    <p>Orders are processed within 1–2 business days.</p>
                    <ul className="bullet-list mt-4">
                        <li><strong>Major Cities</strong> (Karachi, Lahore, Islamabad): 5–7 business days</li>
                        <li><strong>Other Cities:</strong> 7–10 business days</li>
                        <li><strong>Remote Areas:</strong> 10–12 business days</li>
                    </ul>
                </div>

                <div className="content-card">
                    <div className="icon-wrapper">📍</div>
                    <h2>Order Tracking</h2>
                    <p>Once your order is dispatched, you'll receive:</p>
                    <ul className="bullet-list">
                        <li>Tracking ID via WhatsApp and SMS</li>
                        <li>Real-time delivery updates</li>
                        <li>Courier partner details for direct tracking</li>
                    </ul>
                </div>
            </div>

            <div className="content-section mt-12">
                <h2>Important Notes</h2>
                <ul className="bullet-list">
                    <li>Delivery timelines may vary during peak seasons, public holidays, or due to weather conditions</li>
                    <li>Please provide a complete and accurate shipping address to ensure smooth delivery</li>
                    <li>If delivery fails due to incorrect address or unavailability, redelivery coordination will be required</li>
                    <li>Our team will contact you if any issues arise during the delivery process</li>
                </ul>
            </div>
        </div>
    );
}
