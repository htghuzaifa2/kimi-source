module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.jsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.js [app-rsc] (ecmascript)"));
}),
"[project]/src/data/products.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Product Data
// Do not remove the exports below, as they are used by the application components.
__turbopack_context__.s([
    "categories",
    ()=>categories,
    "gamingSubCategories",
    ()=>gamingSubCategories,
    "productTypes",
    ()=>productTypes,
    "products",
    ()=>products
]);
const categories = [
    'Men',
    'Women',
    'Kids',
    'Gaming Outfits'
];
const gamingSubCategories = [
    'Ghost of Tsushima',
    'God of War',
    'The Last of Us',
    'Elden Ring',
    'Assassin\'s Creed'
];
const productTypes = [
    'Hoodie',
    'Jacket',
    'Shirt',
    'Pants',
    'Accessories'
];
const products = [
    {
        id: 1,
        slug: "kimi-premium-grey-hoodie-atsu-wolf-mount-yotei-graphic",
        name: "Kimi Premium Grey Hoodie | Atsu Wolf & Mount Yotei Graphic Streetwear (All Sizes)",
        price: 3600,
        category: "Men",
        subCategory: null,
        productType: "Hoodie",
        image: "https://i.postimg.cc/prXDrB2s/premium-grey-hoodie-atsu-wolf.webp",
        description: "Kimi Signature Grey Hoodie featuring the Atsu, Wolf & Mount Yotei graphic. Premium 100% Cotton for warmth and urban style in Pakistan.",
        longDescription: `Product Highlights:

- Brand: Kimi
- Product: Premium Pullover Hoodie
- Type: Graphic Streetwear
- Condition: New
- Season: Autumn/Winter 2025 (Year-Round Comfort)
- Collection: Kimi Streetwear Essentials
- Material: Premium 100% Heavy Cotton Blend for superior softness and durability. Features a brushed interior lining.
- Fit Options: Relaxed yet Structured Fit (All sizes available).
- Design: Exclusive Kimi Atsu, Wolf & Mount Yotei Graphic, inspired by Japanese artistry.
- Versatility: Effortlessly pairs with jeans, joggers, or layered streetwear. Also features an authentic washed finish for a lived-in look.
- Details: Adjustable Drawstring Hood, Durable Ribbed Cuffs and Hem.
- Occasion: Casual / Urban Wear
- Availability: All sizes available. Home Delivery Nationwide.

Note: Manual measurement may result in a minor size error (1-3cm), which does not affect the overall fit or quality.`,
        images: [
            "https://i.postimg.cc/prXDrB2s/premium-grey-hoodie-atsu-wolf.webp"
        ],
        stock: 100,
        specifications: {
            "Brand": "Kimi",
            "Product": "Hoodie/Pullover",
            "Type": "Streetwear Graphic",
            "Condition": "New",
            "Material": "100% Heavy Cotton Blend",
            "Fit": "Relaxed",
            "Design": "Atsu Wolf & Mount Yotei Graphic"
        }
    }
];
}),
"[project]/src/config/seoConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// SEO configuration for all pages
__turbopack_context__.s([
    "seoConfig",
    ()=>seoConfig
]);
const seoConfig = {
    home: {
        title: "Kimi — Wear Without Fear",
        description: "Kimi – Pakistan’s premier clothing brand. Shop the latest collections of authentic ethnic wear, designer apparel, and luxury prêt. Discover stylish, fearless fashion with high-quality fabrics and designs. Worldwide shipping available",
        keywords: "Kimi, custom sizing Pakistan, premium clothing brand, fearless fashion, streetwear Pakistan, gaming outfits, tailored fits, online shopping Pakistan",
        canonicalUrl: "/",
        ogImage: "/favicon.ico"
    },
    contact: {
        title: "Contact Us",
        description: "Need help with custom sizing? Contact Kimi's support team in Pakistan. We're here to assist with orders, fits, and fashion inquiries. WhatsApp or email us today.",
        keywords: "contact Kimi, custom sizing help, customer support Pakistan, clothing inquiries",
        canonicalUrl: "/contact",
        ogImage: "/og-contact.jpg"
    },
    about: {
        title: "About Us",
        description: "Kimi is Pakistan's fearless fashion house. We believe in the perfect fit, offering custom sizing and premium quality for those who dare to stand out.",
        keywords: "about Kimi, fashion brand story, custom sizing brand, fearless fashion Pakistan",
        canonicalUrl: "/about",
        ogImage: "/og-about.jpg"
    },
    faq: {
        title: "FAQ",
        description: "Find answers about Kimi's custom sizing, shipping across Pakistan, and return policies. Everything you need to know for a seamless shopping experience.",
        keywords: "Kimi FAQ, custom size guide, shipping Pakistan, returns policy",
        canonicalUrl: "/faq",
        ogImage: "/og-faq.jpg"
    },
    shipping: {
        title: "Shipping Policy",
        description: "Experience fast, reliable shipping across Pakistan with Kimi. Free delivery on qualifying orders. tracking available for all custom and superior standard shipments.",
        keywords: "shipping Pakistan, fast delivery, Kimi shipping, free delivery Lahore Karachi Islamabad",
        canonicalUrl: "/shipping",
        ogImage: "/og-shipping.jpg"
    },
    returns: {
        title: "Returns & Refunds",
        description: "Hassle-free returns and exchanges. If the fit isn't perfect, we'll make it right. Read Kimi's customer-first return policy.",
        keywords: "returns policy, exchange Pakistan, custom size adjustment, Kimi refunds",
        canonicalUrl: "/returns",
        ogImage: "/og-returns.jpg"
    },
    cod: {
        title: "Cash on Delivery",
        description: "Shop premium fashion with confidence. Kimi offers Cash on Delivery (COD) services everywhere in Pakistan. Inspect your custom fits upon arrival.",
        keywords: "cash on delivery Pakistan, COD shopping, secure payment, Kimi payments",
        canonicalUrl: "/cod",
        ogImage: "/og-cod.jpg"
    },
    checkout: {
        title: "Checkout",
        description: "Complete your order for premium custom-fit clothing. Secure checkout with COD and online payment options. Fast dispatch to all cities in Pakistan.",
        keywords: "checkout, buy clothes Pakistan, secure payment, custom sizing order",
        canonicalUrl: "/checkout",
        ogImage: "/og-checkout.jpg"
    },
    terms: {
        title: "Terms of Service",
        description: "Kimi's terms of service. Transparent policies for custom sizing orders, shipping, and usage. Designed to protect our valued Pakistani customers.",
        keywords: "terms of service, legal, custom order terms, Kimi policies",
        canonicalUrl: "/terms",
        ogImage: "/og-terms.jpg"
    },
    privacy: {
        title: "Privacy Policy",
        description: "Your privacy matters. Learn how Kimi protects your personal data while providing you with the best personalized shopping experience in Pakistan.",
        keywords: "privacy policy, data protection Pakistan, secure shopping",
        canonicalUrl: "/privacy",
        ogImage: "/og-privacy.jpg"
    },
    categories: {
        title: "Shop by Collection",
        description: "Explore Kimi's exclusive collections. From gaming gear to streetwear, find your perfect style and fit with our custom sizing options.",
        keywords: "fashion collections, custom fit clothing, shop by category, Kimi designs",
        canonicalUrl: "/collections",
        ogImage: "/og-collections.jpg"
    },
    sizeGuide: {
        title: "Size Guide",
        description: "Not sure about your size? Check our detailed guide or choose Custom Sizing for a tailored fit unique to you. The best fit in Pakistan, guaranteed.",
        keywords: "size guide, custom sizing Pakistan, how to measure, tailored fit",
        canonicalUrl: "/size-guide",
        ogImage: "/og-size-guide.jpg"
    },
    search: {
        title: "Search Results",
        description: "Search for your favorite looks, custom sizing options, and premium outfits on Kimi.",
        keywords: "search clothing, find fashion, Kimi search",
        canonicalUrl: "/search",
        ogImage: "/og-search.jpg"
    }
};
}),
"[project]/src/app/collections/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollectionsPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$seoConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/seoConfig.js [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$seoConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].categories.title,
    description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$seoConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].categories.description,
    keywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$seoConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].categories.keywords,
    openGraph: {
        title: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$seoConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].categories.title,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$seoConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].categories.description,
        url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$seoConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].categories.canonicalUrl,
        images: [
            {
                url: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$seoConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].categories.ogImage
            }
        ],
        type: 'website'
    },
    alternates: {
        canonical: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$seoConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].categories.canonicalUrl
    }
};
function CollectionsPage() {
    const uniqueCategories = [
        ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"].map((p)=>p.category))
    ];
    const categoriesData = uniqueCategories.map((cat)=>{
        const product = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"].find((p)=>p.category === cat);
        return {
            name: cat,
            image: product ? product.image : '',
            count: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["products"].filter((p)=>p.category === cat).length
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "content-page container categories-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "content-header text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "h2",
                        children: "Browse Categories"
                    }, void 0, false, {
                        fileName: "[project]/src/app/collections/page.jsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted",
                        children: "Explore our wide range of premium collections."
                    }, void 0, false, {
                        fileName: "[project]/src/app/collections/page.jsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/collections/page.jsx",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "categories-grid",
                children: categoriesData.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/shop/${cat.name.toLowerCase().replace(/\s+/g, '-')}`,
                        className: "category-tile",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "category-tile-image-wrapper",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: cat.image,
                                        alt: cat.name,
                                        className: "category-tile-image"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/collections/page.jsx",
                                        lineNumber: 49,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "category-tile-overlay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/collections/page.jsx",
                                        lineNumber: 50,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/collections/page.jsx",
                                lineNumber: 48,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "category-tile-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "category-tile-title",
                                        children: cat.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/collections/page.jsx",
                                        lineNumber: 53,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "category-tile-count",
                                        children: [
                                            cat.count,
                                            " Products"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/collections/page.jsx",
                                        lineNumber: 54,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/collections/page.jsx",
                                lineNumber: 52,
                                columnNumber: 25
                            }, this)
                        ]
                    }, cat.name, true, {
                        fileName: "[project]/src/app/collections/page.jsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/collections/page.jsx",
                lineNumber: 45,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/collections/page.jsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/collections/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/collections/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8dbe073b._.js.map