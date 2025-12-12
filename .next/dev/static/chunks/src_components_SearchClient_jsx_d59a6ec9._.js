(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/SearchClient.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/products.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// import '../pages/SearchResults.css';
// We need a wrapper component for Suspense too if we were to export it directly, but let's do the logic here.
const SearchClient = ()=>{
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const q = searchParams.get('q');
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(q || '');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchClient.useEffect": ()=>{
            if (q) {
                setQuery(q);
            }
        }
    }["SearchClient.useEffect"], [
        q
    ]);
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SearchClient.useMemo[results]": ()=>{
            if (!query.trim()) return [];
            const normalizedQuery = query.toLowerCase().trim();
            const words = normalizedQuery.split(/\s+/);
            const isNumericSearch = /^\d+$/.test(normalizedQuery);
            // Priority 0: Exact ID match
            if (isNumericSearch) {
                const idMatches = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter({
                    "SearchClient.useMemo[results].idMatches": (p)=>p.id.toString() === normalizedQuery
                }["SearchClient.useMemo[results].idMatches"]);
                if (idMatches.length > 0) return idMatches;
            }
            // Priority 1: Partial ID match
            let idPartialMatches = [];
            if (isNumericSearch) {
                idPartialMatches = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter({
                    "SearchClient.useMemo[results]": (p)=>p.id.toString().includes(normalizedQuery)
                }["SearchClient.useMemo[results]"]);
            }
            // Priority 2: First word exact match
            let firstWordMatches = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter({
                "SearchClient.useMemo[results].firstWordMatches": (p)=>{
                    const name = p.name.toLowerCase();
                    const nameWords = name.split(/\s+/);
                    return nameWords.some({
                        "SearchClient.useMemo[results].firstWordMatches": (word)=>word.startsWith(words[0])
                    }["SearchClient.useMemo[results].firstWordMatches"]);
                }
            }["SearchClient.useMemo[results].firstWordMatches"]);
            // Priority 3: Any word exact match
            let anyWordMatches = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter({
                "SearchClient.useMemo[results].anyWordMatches": (p)=>{
                    const name = p.name.toLowerCase();
                    return words.every({
                        "SearchClient.useMemo[results].anyWordMatches": (queryWord)=>name.split(/\s+/).some({
                                "SearchClient.useMemo[results].anyWordMatches": (nameWord)=>nameWord.startsWith(queryWord)
                            }["SearchClient.useMemo[results].anyWordMatches"])
                    }["SearchClient.useMemo[results].anyWordMatches"]);
                }
            }["SearchClient.useMemo[results].anyWordMatches"]);
            // Priority 4: Fuzzy match
            let fuzzyMatches = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].filter({
                "SearchClient.useMemo[results].fuzzyMatches": (p)=>{
                    const searchableText = `${p.name} ${p.category} ${p.subCategory || ''} ${p.productType}`.toLowerCase();
                    return words.some({
                        "SearchClient.useMemo[results].fuzzyMatches": (word)=>searchableText.includes(word)
                    }["SearchClient.useMemo[results].fuzzyMatches"]);
                }
            }["SearchClient.useMemo[results].fuzzyMatches"]);
            // Combine results
            const allMatches = [
                ...idPartialMatches,
                ...firstWordMatches.filter({
                    "SearchClient.useMemo[results]": (p)=>!idPartialMatches.find({
                            "SearchClient.useMemo[results]": (m)=>m.id === p.id
                        }["SearchClient.useMemo[results]"])
                }["SearchClient.useMemo[results]"]),
                ...anyWordMatches.filter({
                    "SearchClient.useMemo[results]": (p)=>!idPartialMatches.find({
                            "SearchClient.useMemo[results]": (m)=>m.id === p.id
                        }["SearchClient.useMemo[results]"]) && !firstWordMatches.find({
                            "SearchClient.useMemo[results]": (m)=>m.id === p.id
                        }["SearchClient.useMemo[results]"])
                }["SearchClient.useMemo[results]"]),
                ...fuzzyMatches.filter({
                    "SearchClient.useMemo[results]": (p)=>!idPartialMatches.find({
                            "SearchClient.useMemo[results]": (m)=>m.id === p.id
                        }["SearchClient.useMemo[results]"]) && !firstWordMatches.find({
                            "SearchClient.useMemo[results]": (m)=>m.id === p.id
                        }["SearchClient.useMemo[results]"]) && !anyWordMatches.find({
                            "SearchClient.useMemo[results]": (m)=>m.id === p.id
                        }["SearchClient.useMemo[results]"])
                }["SearchClient.useMemo[results]"])
            ];
            return allMatches;
        }
    }["SearchClient.useMemo[results]"], [
        query
    ]);
    // Update query manually and push to URL
    const handleSearch = (e)=>{
        e.preventDefault();
        if (query.trim()) {
            // In Next.js App router, we might want to push to URL or just update local state if we want instant feedback?
            // The original code updated search params.
            window.history.pushState(null, '', `?q=${encodeURIComponent(query.trim())}`);
        // But we already have local state `query` so results update instantly.
        // However, to keep URL in sync, we use history API or router.push (which triggers navigation).
        // router.push is better.
        }
    };
    // Actually, let's stick to updating state and optional URL sync.
    // Or better, make it driven by URL state to support back button properly?
    // The original uses useSearchParams which comes from URL.
    // If we type in input, we update `query` state.
    // If we submit, we update URL.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "search-results-page",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "search-page-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "h2",
                            children: "Search Products"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchClient.jsx",
                            lineNumber: 103,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: (e)=>{
                                e.preventDefault();
                                window.history.pushState(null, '', `?q=${encodeURIComponent(query.trim())}`);
                            },
                            className: "search-page-form",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "search-page-input-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            size: 20,
                                            className: "search-page-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SearchClient.jsx",
                                            lineNumber: 107,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "search-page-input",
                                            placeholder: "Search by name, category, or ID...",
                                            value: query,
                                            onChange: (e)=>setQuery(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SearchClient.jsx",
                                            lineNumber: 108,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "search-page-clear",
                                            onClick: ()=>{
                                                setQuery('');
                                                window.history.pushState(null, '', `?q=`);
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SearchClient.jsx",
                                                lineNumber: 121,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SearchClient.jsx",
                                            lineNumber: 116,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SearchClient.jsx",
                                    lineNumber: 106,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "btn btn-primary",
                                    children: "Search"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SearchClient.jsx",
                                    lineNumber: 125,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SearchClient.jsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SearchClient.jsx",
                    lineNumber: 102,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "search-results-info",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: results.length > 0 ? `Found ${results.length} ${results.length === 1 ? 'product' : 'products'} for "${query}"` : `No products found for "${query}"`
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchClient.jsx",
                        lineNumber: 133,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/SearchClient.jsx",
                    lineNumber: 132,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                !query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "search-hints-page",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted",
                            children: "Start typing to search for products..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchClient.jsx",
                            lineNumber: 144,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "search-suggestions",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: 'Try: "hoodie" or ID like "1", "2", "3"'
                            }, void 0, false, {
                                fileName: "[project]/src/components/SearchClient.jsx",
                                lineNumber: 146,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchClient.jsx",
                            lineNumber: 145,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SearchClient.jsx",
                    lineNumber: 143,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)),
                results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "product-grid",
                    children: results.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "product-card fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/product/${product.slug}`,
                                    className: "product-image-wrapper",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: product.image,
                                            alt: product.name,
                                            className: "product-image"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SearchClient.jsx",
                                            lineNumber: 156,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "product-overlay",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-secondary quick-view-btn",
                                                children: "View Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SearchClient.jsx",
                                                lineNumber: 158,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SearchClient.jsx",
                                            lineNumber: 157,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SearchClient.jsx",
                                    lineNumber: 155,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "product-info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '0.75rem',
                                                color: 'var(--color-text-light)',
                                                fontWeight: '500',
                                                marginBottom: '4px',
                                                display: 'block'
                                            },
                                            children: [
                                                "ID: ",
                                                product.id
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SearchClient.jsx",
                                            lineNumber: 162,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/product/${product.slug}`,
                                            className: "product-title",
                                            children: product.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SearchClient.jsx",
                                            lineNumber: 165,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "product-meta",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "product-price",
                                                    children: [
                                                        "PKR ",
                                                        product.price.toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SearchClient.jsx",
                                                    lineNumber: 167,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "product-rating",
                                                    children: "★★★★★"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SearchClient.jsx",
                                                    lineNumber: 168,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SearchClient.jsx",
                                            lineNumber: 166,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SearchClient.jsx",
                                    lineNumber: 161,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, product.id, true, {
                            fileName: "[project]/src/components/SearchClient.jsx",
                            lineNumber: 154,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/SearchClient.jsx",
                    lineNumber: 152,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SearchClient.jsx",
            lineNumber: 101,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/SearchClient.jsx",
        lineNumber: 100,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SearchClient, "gieHM/kRUgZNRzARgxO7qvENQWE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = SearchClient;
const __TURBOPACK__default__export__ = SearchClient;
var _c;
__turbopack_context__.k.register(_c, "SearchClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_SearchClient_jsx_d59a6ec9._.js.map