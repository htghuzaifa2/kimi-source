// Helper to track used slugs
const usedSlugs = new Set();

// Gaming sub-categories (games)
const gamingSubCategories = [
    'Ghost of Tsushima',
    'God of War',
    'The Last of Us',
    'Elden Ring',
    'Assassin\'s Creed'
];

// Product types for clothing
const productTypes = ['Hoodie', 'Jacket', 'Shirt', 'Pants', 'Accessories'];

export const products = Array.from({ length: 150 }, (_, i) => {
    const categories = [
        'Men', 'Women', 'Kids', 'Gaming Outfits'
    ];

    const category = categories[i % categories.length];
    const id = i + 1;

    // Determine sub-category and product type
    let subCategory = null;
    let productType = productTypes[i % productTypes.length];

    if (category === 'Gaming Outfits') {
        subCategory = gamingSubCategories[i % gamingSubCategories.length];
    }

    // Create product name
    let name;
    if (category === 'Gaming Outfits' && subCategory) {
        name = `${subCategory} ${productType} ${Math.floor(i / gamingSubCategories.length) + 1}`;
    } else {
        name = `${category} ${productType} ${id}`;
    }

    // Simplified slug generation
    let baseSlug = name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

    let slug = baseSlug;
    let counter = 2;

    // Safety break for while loop
    let loopSafety = 0;
    while (usedSlugs.has(slug) && loopSafety < 200) {
        slug = `${baseSlug}-${counter}`;
        counter++;
        loopSafety++;
    }

    usedSlugs.add(slug);

    // Create description based on category
    let description, longDescription;
    if (category === 'Gaming Outfits' && subCategory) {
        description = `Official ${subCategory} ${productType.toLowerCase()}. Premium quality gaming merchandise for true fans.`;
        longDescription = `Show your passion for ${subCategory} with this exclusive ${productType.toLowerCase()}. Made from high-quality materials with authentic game-inspired designs. Perfect for gaming sessions, casual outings, or everyday wear. Available in multiple sizes with fast delivery across Pakistan.`;
    } else {
        description = `Premium ${category.toLowerCase()} ${productType.toLowerCase()}. Stylish, comfortable, and durable.`;
        longDescription = `This ${category.toLowerCase()} ${productType.toLowerCase()} combines style and comfort perfectly. Crafted from high-quality materials, it's designed for everyday wear and special occasions. Available in various sizes with fast shipping across Pakistan.`;
    }

    return {
        id: id,
        name: name,
        slug: slug,
        price: Math.floor(Math.random() * 8000) + 1500,
        category: category,
        subCategory: subCategory,
        productType: productType,
        image: `https://picsum.photos/seed/${id}/600/800`,
        rating: Math.floor(Math.random() * 2) + 4,
        description: description,
        longDescription: longDescription,
        images: [
            `https://picsum.photos/seed/${id}a/600/800`,
            `https://picsum.photos/seed/${id}b/600/800`,
            `https://picsum.photos/seed/${id}c/600/800`
        ]
    };
});

// Export gaming sub-categories for use in components
export { gamingSubCategories, productTypes };
