// Category data with emojis as placeholders for images
export const categories = [
  { id: 1, name: 'Herbal Tea - Chai', emoji: '🍵', slug: 'herbal-tea-chai' },
  { id: 2, name: 'Millets & Cereals', emoji: '🌾', slug: 'millets-cereals' },
  { id: 3, name: 'Oils & Extracts', emoji: '🫒', slug: 'oils-extracts' },
  { id: 4, name: 'Rasayan', emoji: '⚗️', slug: 'rasayan' },
  { id: 5, name: 'Himalayan Salt', emoji: '🧂', slug: 'himalayan-salt' },
  { id: 6, name: 'Sabut Herbs', emoji: '🌿', slug: 'sabut-herbs' },
  { id: 7, name: 'Gums & Resins', emoji: '🪨', slug: 'gums-resins' },
  { id: 8, name: 'Bhasm', emoji: '🔥', slug: 'bhasm' },
  { id: 9, name: 'Herbs Powder', emoji: '🥣', slug: 'herbs-powder' },
  { id: 10, name: 'Dried Flowers', emoji: '🌸', slug: 'dried-flowers' },
  { id: 11, name: 'Medicinal Seeds', emoji: '🫘', slug: 'medicinal-seeds' },
  { id: 12, name: 'Grocery & Gourmet', emoji: '🛒', slug: 'grocery-gourmet' },
  { id: 13, name: 'Spices & Powders', emoji: '🫚', slug: 'spices-powders' },
  { id: 14, name: 'Dry Fruits', emoji: '🥜', slug: 'dry-fruits' },
  { id: 15, name: 'Combo Packs', emoji: '📦', slug: 'combo-packs' },
  { id: 16, name: 'Pooja Items', emoji: '🪔', slug: 'pooja-items' },
]

// Products data organized by category
export const products = [
  // Herbal Tea - Chai (category id: 1)
  { id: 1, name: 'Tulsi Chai Premium Blend', categoryId: 1, price: 249, originalPrice: 299, rating: 4.9, reviews: 189, badge: 'bestseller', emoji: '🍵', description: 'A soothing blend of holy basil and premium tea leaves' },
  { id: 2, name: 'Masala Chai Mix', categoryId: 1, price: 199, originalPrice: 249, rating: 4.7, reviews: 234, badge: null, emoji: '🍵', description: 'Traditional Indian spiced tea blend' },
  { id: 3, name: 'Green Tea with Lemongrass', categoryId: 1, price: 279, originalPrice: null, rating: 4.8, reviews: 156, badge: 'organic', emoji: '🍵', description: 'Refreshing green tea infused with lemongrass' },
  { id: 4, name: 'Chamomile Herbal Tea', categoryId: 1, price: 329, originalPrice: 399, rating: 4.6, reviews: 98, badge: null, emoji: '🍵', description: 'Calming chamomile for peaceful evenings' },

  // Millets & Cereals (category id: 2)
  { id: 5, name: 'Organic Ragi Flour', categoryId: 2, price: 189, originalPrice: null, rating: 4.8, reviews: 312, badge: 'organic', emoji: '🌾', description: 'Stone-ground finger millet flour' },
  { id: 6, name: 'Foxtail Millet', categoryId: 2, price: 159, originalPrice: 199, rating: 4.7, reviews: 187, badge: null, emoji: '🌾', description: 'Nutrient-rich ancient grain' },
  { id: 7, name: 'Pearl Millet (Bajra)', categoryId: 2, price: 129, originalPrice: null, rating: 4.5, reviews: 243, badge: 'organic', emoji: '🌾', description: 'Traditional Indian millet grain' },
  { id: 8, name: 'Little Millet', categoryId: 2, price: 179, originalPrice: 219, rating: 4.6, reviews: 156, badge: null, emoji: '🌾', description: 'Light and easily digestible millet' },

  // Oils & Extracts (category id: 3)
  { id: 9, name: 'Cold Pressed Sesame Oil', categoryId: 3, price: 399, originalPrice: 499, rating: 4.8, reviews: 267, badge: 'bestseller', emoji: '🫒', description: 'Pure cold pressed til oil' },
  { id: 10, name: 'Coconut Oil Virgin', categoryId: 3, price: 349, originalPrice: null, rating: 4.9, reviews: 445, badge: 'organic', emoji: '🫒', description: 'Cold pressed virgin coconut oil' },
  { id: 11, name: 'Mustard Oil Pure', categoryId: 3, price: 299, originalPrice: 349, rating: 4.6, reviews: 198, badge: null, emoji: '🫒', description: 'Traditional cold pressed mustard oil' },
  { id: 12, name: 'Castor Oil', categoryId: 3, price: 249, originalPrice: null, rating: 4.7, reviews: 312, badge: 'organic', emoji: '🫒', description: 'Pure castor oil for hair and skin' },

  // Rasayan (category id: 4)
  { id: 13, name: 'Triphala Churna Mix', categoryId: 4, price: 349, originalPrice: 449, rating: 4.6, reviews: 167, badge: null, emoji: '⚗️', description: 'Classical Ayurvedic formulation' },
  { id: 14, name: 'Chyawanprash Premium', categoryId: 4, price: 599, originalPrice: 749, rating: 4.8, reviews: 389, badge: 'bestseller', emoji: '⚗️', description: 'Traditional immunity booster' },
  { id: 15, name: 'Brahmi Rasayan', categoryId: 4, price: 449, originalPrice: null, rating: 4.5, reviews: 134, badge: 'organic', emoji: '⚗️', description: 'Memory and brain tonic' },
  { id: 16, name: 'Amla Rasayan', categoryId: 4, price: 379, originalPrice: 449, rating: 4.7, reviews: 212, badge: null, emoji: '⚗️', description: 'Vitamin C rich rejuvenator' },

  // Himalayan Salt (category id: 5)
  { id: 17, name: 'Pure Himalayan Pink Salt', categoryId: 5, price: 179, originalPrice: null, rating: 4.7, reviews: 423, badge: 'organic', emoji: '🧂', description: '84 minerals rich pink salt' },
  { id: 18, name: 'Black Salt (Kala Namak)', categoryId: 5, price: 149, originalPrice: 179, rating: 4.8, reviews: 298, badge: 'bestseller', emoji: '🧂', description: 'Digestive and flavorful black salt' },
  { id: 19, name: 'Rock Salt Powder', categoryId: 5, price: 129, originalPrice: null, rating: 4.6, reviews: 187, badge: null, emoji: '🧂', description: 'Finely ground sendha namak' },
  { id: 20, name: 'Himalayan Salt Lamp Grade', categoryId: 5, price: 299, originalPrice: 399, rating: 4.5, reviews: 89, badge: null, emoji: '🧂', description: 'Large crystals for lamps' },

  // Sabut Herbs (category id: 6)
  { id: 21, name: 'Whole Tulsi Leaves', categoryId: 6, price: 199, originalPrice: null, rating: 4.8, reviews: 267, badge: 'organic', emoji: '🌿', description: 'Sacred basil whole dried leaves' },
  { id: 22, name: 'Neem Leaves Dried', categoryId: 6, price: 149, originalPrice: 179, rating: 4.6, reviews: 198, badge: null, emoji: '🌿', description: 'Natural antibacterial neem' },
  { id: 23, name: 'Curry Leaves Dried', categoryId: 6, price: 129, originalPrice: null, rating: 4.7, reviews: 312, badge: 'bestseller', emoji: '🌿', description: 'Aromatic curry patta' },
  { id: 24, name: 'Bay Leaves (Tej Patta)', categoryId: 6, price: 99, originalPrice: 129, rating: 4.5, reviews: 234, badge: null, emoji: '🌿', description: 'Fragrant whole bay leaves' },

  // Gums & Resins (category id: 7)
  { id: 25, name: 'Guggul Resin Premium', categoryId: 7, price: 599, originalPrice: 749, rating: 4.5, reviews: 89, badge: null, emoji: '🪨', description: 'Pure Indian bdellium resin' },
  { id: 26, name: 'Frankincense (Loban)', categoryId: 7, price: 349, originalPrice: null, rating: 4.7, reviews: 156, badge: 'organic', emoji: '🪨', description: 'Sacred aromatic resin' },
  { id: 27, name: 'Gum Arabic (Gond)', categoryId: 7, price: 299, originalPrice: 349, rating: 4.6, reviews: 187, badge: null, emoji: '🪨', description: 'Edible acacia gum' },
  { id: 28, name: 'Asafoetida Resin (Hing)', categoryId: 7, price: 449, originalPrice: 549, rating: 4.8, reviews: 234, badge: 'bestseller', emoji: '🪨', description: 'Pure asafoetida resin' },

  // Bhasm (category id: 8)
  { id: 29, name: 'Swarna Bhasm', categoryId: 8, price: 2999, originalPrice: 3499, rating: 4.9, reviews: 67, badge: null, emoji: '🔥', description: 'Gold ash Ayurvedic preparation' },
  { id: 30, name: 'Abhrak Bhasm', categoryId: 8, price: 899, originalPrice: null, rating: 4.6, reviews: 89, badge: 'organic', emoji: '🔥', description: 'Mica ash for respiratory health' },
  { id: 31, name: 'Praval Bhasm', categoryId: 8, price: 749, originalPrice: 899, rating: 4.7, reviews: 112, badge: null, emoji: '🔥', description: 'Coral calcium ash' },
  { id: 32, name: 'Godanti Bhasm', categoryId: 8, price: 449, originalPrice: null, rating: 4.5, reviews: 78, badge: null, emoji: '🔥', description: 'Gypsum ash for pitta balance' },

  // Herbs Powder (category id: 9)
  { id: 33, name: 'Ashwagandha Root Powder', categoryId: 9, price: 299, originalPrice: 399, rating: 4.8, reviews: 256, badge: 'organic', emoji: '🥣', description: 'Stress relief adaptogen powder' },
  { id: 34, name: 'Brahmi Powder', categoryId: 9, price: 249, originalPrice: null, rating: 4.7, reviews: 198, badge: 'bestseller', emoji: '🥣', description: 'Memory enhancing herb powder' },
  { id: 35, name: 'Shatavari Powder', categoryId: 9, price: 279, originalPrice: 329, rating: 4.6, reviews: 167, badge: 'organic', emoji: '🥣', description: 'Women wellness herb' },
  { id: 36, name: 'Moringa Powder', categoryId: 9, price: 199, originalPrice: null, rating: 4.8, reviews: 312, badge: null, emoji: '🥣', description: 'Superfood drumstick leaf powder' },

  // Dried Flowers (category id: 10)
  { id: 37, name: 'Dried Rose Petals', categoryId: 10, price: 199, originalPrice: 249, rating: 4.9, reviews: 534, badge: 'bestseller', emoji: '🌹', description: 'Fragrant dried rose petals' },
  { id: 38, name: 'Hibiscus Flowers', categoryId: 10, price: 179, originalPrice: null, rating: 4.7, reviews: 234, badge: 'organic', emoji: '🌺', description: 'Dried hibiscus for tea and hair' },
  { id: 39, name: 'Marigold Petals', categoryId: 10, price: 149, originalPrice: 179, rating: 4.6, reviews: 156, badge: null, emoji: '🌼', description: 'Golden calendula petals' },
  { id: 40, name: 'Jasmine Dried', categoryId: 10, price: 299, originalPrice: null, rating: 4.8, reviews: 189, badge: null, emoji: '🌸', description: 'Aromatic jasmine flowers' },

  // Medicinal Seeds (category id: 11)
  { id: 41, name: 'Flax Seeds (Alsi)', categoryId: 11, price: 149, originalPrice: null, rating: 4.7, reviews: 345, badge: 'organic', emoji: '🫘', description: 'Omega-3 rich flax seeds' },
  { id: 42, name: 'Chia Seeds Premium', categoryId: 11, price: 299, originalPrice: 349, rating: 4.8, reviews: 267, badge: 'bestseller', emoji: '🫘', description: 'Superfood chia seeds' },
  { id: 43, name: 'Pumpkin Seeds', categoryId: 11, price: 349, originalPrice: null, rating: 4.6, reviews: 198, badge: null, emoji: '🫘', description: 'Zinc rich pumpkin seeds' },
  { id: 44, name: 'Sunflower Seeds', categoryId: 11, price: 199, originalPrice: 249, rating: 4.5, reviews: 156, badge: 'organic', emoji: '🫘', description: 'Vitamin E rich seeds' },

  // Grocery & Gourmet (category id: 12)
  { id: 45, name: 'Organic Jaggery', categoryId: 12, price: 179, originalPrice: null, rating: 4.8, reviews: 423, badge: 'organic', emoji: '🛒', description: 'Natural cane sugar substitute' },
  { id: 46, name: 'Raw Honey Organic', categoryId: 12, price: 449, originalPrice: 549, rating: 4.9, reviews: 567, badge: 'bestseller', emoji: '🛒', description: 'Unprocessed wild honey' },
  { id: 47, name: 'Desi Ghee Pure', categoryId: 12, price: 699, originalPrice: null, rating: 4.8, reviews: 389, badge: 'organic', emoji: '🛒', description: 'A2 cow ghee clarified butter' },
  { id: 48, name: 'Rock Sugar (Mishri)', categoryId: 12, price: 129, originalPrice: 149, rating: 4.6, reviews: 234, badge: null, emoji: '🛒', description: 'Natural crystallized sugar' },

  // Spices & Powders (category id: 13)
  { id: 49, name: 'Premium Saffron 1g', categoryId: 13, price: 699, originalPrice: 899, rating: 4.9, reviews: 312, badge: 'bestseller', emoji: '🫚', description: 'Kashmiri kesar finest grade' },
  { id: 50, name: 'Turmeric Powder Organic', categoryId: 13, price: 149, originalPrice: null, rating: 4.8, reviews: 456, badge: 'organic', emoji: '🫚', description: 'High curcumin haldi powder' },
  { id: 51, name: 'Red Chili Powder', categoryId: 13, price: 129, originalPrice: 149, rating: 4.7, reviews: 289, badge: null, emoji: '🫚', description: 'Kashmiri lal mirch powder' },
  { id: 52, name: 'Garam Masala Blend', categoryId: 13, price: 199, originalPrice: null, rating: 4.6, reviews: 234, badge: null, emoji: '🫚', description: 'Traditional spice blend' },

  // Dry Fruits (category id: 14)
  { id: 53, name: 'Mixed Dry Fruits Pack', categoryId: 14, price: 899, originalPrice: 1099, rating: 4.7, reviews: 278, badge: null, emoji: '🥜', description: 'Assorted premium dry fruits' },
  { id: 54, name: 'California Almonds', categoryId: 14, price: 699, originalPrice: null, rating: 4.8, reviews: 456, badge: 'bestseller', emoji: '🥜', description: 'Premium quality almonds' },
  { id: 55, name: 'Cashews Premium W320', categoryId: 14, price: 799, originalPrice: 899, rating: 4.9, reviews: 345, badge: null, emoji: '🥜', description: 'Whole cashew nuts' },
  { id: 56, name: 'Raisins Golden', categoryId: 14, price: 249, originalPrice: null, rating: 4.6, reviews: 198, badge: 'organic', emoji: '🥜', description: 'Sweet golden kishmish' },

  // Combo Packs (category id: 15)
  { id: 57, name: 'Immunity Booster Kit', categoryId: 15, price: 1299, originalPrice: 1699, rating: 4.8, reviews: 234, badge: 'bestseller', emoji: '📦', description: 'Complete immunity package' },
  { id: 58, name: 'Detox Starter Pack', categoryId: 15, price: 999, originalPrice: 1299, rating: 4.7, reviews: 156, badge: null, emoji: '📦', description: 'Body cleanse combo' },
  { id: 59, name: 'Hair Care Bundle', categoryId: 15, price: 799, originalPrice: null, rating: 4.6, reviews: 189, badge: 'organic', emoji: '📦', description: 'Natural hair care set' },
  { id: 60, name: 'Kitchen Essentials Pack', categoryId: 15, price: 1499, originalPrice: 1899, rating: 4.5, reviews: 123, badge: null, emoji: '📦', description: 'Healthy cooking combo' },

  // Pooja Items (category id: 16)
  { id: 61, name: 'Pooja Samagri Set', categoryId: 16, price: 499, originalPrice: 649, rating: 4.8, reviews: 312, badge: 'bestseller', emoji: '🪔', description: 'Complete worship kit' },
  { id: 62, name: 'Camphor Pure (Kapur)', categoryId: 16, price: 149, originalPrice: null, rating: 4.7, reviews: 234, badge: 'organic', emoji: '🪔', description: 'Natural edible camphor' },
  { id: 63, name: 'Dhoop Sticks Premium', categoryId: 16, price: 199, originalPrice: 249, rating: 4.6, reviews: 189, badge: null, emoji: '🪔', description: 'Fragrant incense sticks' },
  { id: 64, name: 'Sandalwood Powder', categoryId: 16, price: 399, originalPrice: null, rating: 4.9, reviews: 267, badge: null, emoji: '🪔', description: 'Pure chandan powder' },
]

// Featured carousel products (subset for homepage)
export const featuredProducts = products.filter(p => p.badge === 'bestseller').slice(0, 4)

// Get products by category ID
export const getProductsByCategory = (categoryId) => {
  return products.filter(p => p.categoryId === parseInt(categoryId))
}

// Get category by ID
export const getCategoryById = (categoryId) => {
  return categories.find(c => c.id === parseInt(categoryId))
}
