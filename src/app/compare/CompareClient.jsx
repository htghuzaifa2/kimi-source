'use client';

import React from 'react';
import { useCompare } from '../../context/CompareContext';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';
import { Trash2, ShoppingBag, X } from 'lucide-react';
import '../../styles/ContentPage.css';

export default function CompareClient() {
    const { compareList, removeFromCompare } = useCompare();
    const { addToCart } = useCart();

    if (compareList.length === 0) {
        return (
            <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
                <h1 className="h2 mb-4">Compare Products</h1>
                <p className="text-muted mb-8">No products selected for comparison.</p>
                <Link href="/shop" className="btn btn-primary">Browse Shop</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <h1 className="h2 mb-8 text-center">Compare Products</h1>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse" style={{ minWidth: '800px' }}>
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-border w-1/4">Feature</th>
                            {compareList.map(product => (
                                <th key={product.id} className="p-4 border-b border-border w-1/4 relative">
                                    <button
                                        onClick={() => removeFromCompare(product.id)}
                                        className="absolute top-2 right-2 p-1 hover:text-red-500 transition-colors"
                                        title="Remove"
                                    >
                                        <X size={20} />
                                    </button>
                                    <div className="text-center">
                                        <div className="mb-4 h-48 flex items-center justify-center">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                        <Link href={`/product/${product.slug}`} className="block font-bold text-lg hover:text-primary mb-2">
                                            {product.name}
                                        </Link>
                                        <div className="text-primary font-bold">
                                            PKR {product.price.toLocaleString()}
                                        </div>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-4 border-b border-border font-bold text-muted">Product ID</td>
                            {compareList.map(product => (
                                <td key={product.id} className="p-4 border-b border-border text-center text-xs text-muted font-mono">
                                    {product.id}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-border font-bold">Category</td>
                            {compareList.map(product => (
                                <td key={product.id} className="p-4 border-b border-border text-center text-muted">
                                    {product.category}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-border font-bold">Description</td>
                            {compareList.map(product => (
                                <td key={product.id} className="p-4 border-b border-border text-center text-sm text-muted">
                                    {product.description?.substring(0, 100)}...
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-border font-bold">Availability</td>
                            {compareList.map(product => (
                                <td key={product.id} className="p-4 border-b border-border text-center text-green-500 font-medium">
                                    In Stock
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-border font-bold">Material</td>
                            {compareList.map(product => (
                                <td key={product.id} className="p-4 border-b border-border text-center text-muted">
                                    Premium Cotton Blend
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-border font-bold">Action</td>
                            {compareList.map(product => (
                                <td key={product.id} className="p-4 border-b border-border text-center">
                                    <button
                                        onClick={() => addToCart(product, 1)}
                                        className="btn btn-primary btn-sm w-full gap-2 justify-center"
                                    >
                                        <ShoppingBag size={16} /> Add to Cart
                                    </button>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Empty Slots Tip */}
            {compareList.length < 4 && (
                <div className="mt-8 text-center">
                    <p className="text-muted mb-4">You can add {4 - compareList.length} more product{4 - compareList.length > 1 ? 's' : ''} to compare.</p>
                    <Link href="/shop" className="btn btn-secondary btn-outline">
                        Find More Products
                    </Link>
                </div>
            )}
        </div>
    );
}
