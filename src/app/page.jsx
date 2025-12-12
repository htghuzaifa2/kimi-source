import { seoConfig } from '../config/seoConfig';
import HomeClient from '../components/HomeClient';

export const metadata = {
    title: {
        absolute: seoConfig.home.title
    },
    description: seoConfig.home.description,
    keywords: seoConfig.home.keywords,
    openGraph: {
        title: seoConfig.home.title,
        description: seoConfig.home.description,
        url: seoConfig.home.canonicalUrl,
        images: [
            {
                url: seoConfig.home.ogImage,
            },
        ],
        type: 'website',
    },
    alternates: {
        canonical: seoConfig.home.canonicalUrl,
    },
};

export default function HomePage() {
    return <HomeClient />;
}
