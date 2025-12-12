import { products } from '../../../data/products';
import ProductClient from '../../../components/ProductClient';

// Required for static export - pre-generate all product slugs
export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = products.find(p => p.slug === slug);

    if (!product) {
        return {
            title: "Product Not Found | Kimi",
            description: "The product you are looking for does not exist.",
        };
    }

    // Generate a strong, sales-focused description limited to 155 chars
    const productDesc = (product.longDescription || product.description || "").substring(0, 80).trim();
    const description = `${productDesc}... Shop this custom style at Kimi. Premium fit & quality in Pakistan.`.substring(0, 155);

    return {
        title: product.name,
        description: description, // Optimized for CTR and Keywords
        keywords: `${product.name}, custom sizing, Kimi clothing, Pakistan fashion, buy ${product.category.toLowerCase()} online, tailored fit`,
        alternates: {
            canonical: `/product/${product.slug}`,
        },
        openGraph: {
            title: product.name,
            description: description,
            url: `/product/${product.slug}`,
            images: [
                {
                    url: product.image,
                    width: 800,
                    height: 600,
                    alt: product.name,
                }
            ],
            type: 'website',
            siteName: 'Kimi Fashion Store',
        },
        twitter: {
            card: 'summary_large_image',
            title: product.name,
            description: description,
            images: [product.image],
        }
    };
}

export default async function ProductPage({ params }) {
    const { slug } = await params;
    return <ProductClient slug={slug} />;
}
