import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Kimi — Wear Without Fear",
    description = "Discover Kimi - Pakistan's premium clothing brand offering fearless fashion for those who dare to stand out. Shop authentic, stylish apparel with worldwide shipping.",
    keywords = "Kimi, Pakistani clothing brand, fashion Pakistan, clothing online, wear without fear, trendy clothes Pakistan, Karachi fashion, Lahore fashion, streetwear Pakistan, worldwide shipping, international delivery",
    ogImage = "/og-image.jpg",
    ogType = "website",
    canonicalUrl
}) => {
    const siteUrl = "https://kimi.com.pk"; // Update with your actual domain
    const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:site_name" content="Kimi" />
            <meta property="og:locale" content="en_PK" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={fullUrl} />}

            {/* Additional SEO Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="author" content="Kimi" />
        </Helmet>
    );
};

export default SEO;
