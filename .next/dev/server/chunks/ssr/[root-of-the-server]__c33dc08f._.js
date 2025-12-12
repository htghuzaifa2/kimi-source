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
"[project]/src/app/shop/[[...slug]]/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopPage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../../../config/seoConfig'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../../../components/ShopClient'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
async function generateMetadata({ params }) {
    const { slug } = await params;
    const category = slug?.[0];
    const subCategory = slug?.[1];
    let title = seoConfig.shop?.title || "Shop | Kimi";
    let description = seoConfig.shop?.description || "Browse our latest collections.";
    let keywords = seoConfig.shop?.keywords || "";
    const formatName = (str)=>{
        if (!str) return '';
        return str.split('-').map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };
    const formattedCategory = formatName(category);
    const formattedSubCategory = formatName(subCategory);
    if (category) {
        if (formattedCategory === 'All') {
            title = seoConfig.shop?.title || title;
            description = seoConfig.shop?.description || description;
        } else {
            title = `Shop ${formattedCategory} Clothing Collection | Kimi`;
            description = `Discover our exclusive ${formattedCategory.toLowerCase()} collection. Premium clothing from Pakistan's fearless fashion brand Kimi. Shop online with worldwide shipping.`;
        }
    }
    if (subCategory) {
        title = `Shop ${formattedSubCategory} ${formattedCategory} Online | Kimi`;
        description = `Buy premium ${formattedSubCategory} ${formattedCategory} online in Pakistan. Exclusive gaming merchandise from Kimi with worldwide shipping.`;
    }
    if (category || subCategory) {
        keywords = `${formattedCategory.toLowerCase()}, ${subCategory ? formattedSubCategory.toLowerCase() + ',' : ''} ${keywords}`;
    }
    let canonicalPath = '/shop';
    if (category) canonicalPath += `/${category}`;
    if (subCategory) canonicalPath += `/${subCategory}`;
    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: canonicalPath
        },
        openGraph: {
            title,
            description,
            url: canonicalPath,
            images: [
                {
                    url: seoConfig.shop?.ogImage || '/favicon.ico'
                }
            ]
        }
    };
}
async function ShopPage({ params }) {
    const { slug } = await params;
    const category = slug?.[0];
    const subCategory = slug?.[1];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ShopClient, {
        categoryParam: category,
        subCategoryParam: subCategory
    }, void 0, false, {
        fileName: "[project]/src/app/shop/[[...slug]]/page.jsx",
        lineNumber: 69,
        columnNumber: 12
    }, this);
}
}),
"[project]/src/app/shop/[[...slug]]/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/shop/[[...slug]]/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c33dc08f._.js.map