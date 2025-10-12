import React, { useState } from 'react';
import { menuItems, menuCategories, type MenuItem } from '../data/menuData';
import ProductDetails from './ProductDetails';

interface MenuProps {
  addToCart: (item: MenuItem, quantity?: number) => void;
}

const Menu: React.FC<MenuProps> = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  // Open product details modal
  const openProductDetails = (item: MenuItem) => {
    setSelectedProduct(item);
    setIsModalOpen(true);
  };

  // Close product details modal
  const closeProductDetails = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-site-cream via-site-warm/20 to-site-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-site-primary mb-6">Our Menu</h1>
          <p className="text-xl lg:text-2xl text-site-text/80 max-w-3xl mx-auto leading-relaxed font-light">
            Discover our carefully crafted selection of premium coffee drinks, fresh pastries, and delicious bites.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up">
          {menuCategories.map((category, i) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 lg:px-8 py-3 lg:py-4 rounded-2xl font-medium transition-all duration-500 transform hover:scale-105 text-lg relative overflow-hidden group animate-fade-in-up ${
                selectedCategory === category
                  ? 'bg-site-gold text-site-cherry shadow-lg scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-site-text border border-site-gold/30 hover:bg-site-cream/60 hover:border-site-gold/50 shadow-soft hover:shadow-medium'
              }`}
              style={{animationDelay: `${i * 0.1}s`}}
            >
              <span className="relative z-10">{category}</span>
              {selectedCategory !== category && (
                <div className="absolute inset-0 bg-gradient-to-r from-site-gold/0 via-site-gold/10 to-site-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
          {filteredItems.map((item, i) => (
            <div
              key={item.id}
              className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-3xl shadow-soft hover:shadow-medium overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer group border border-site-gold/20 animate-fade-in-up"
              onClick={() => openProductDetails(item)}
              style={{animationDelay: `${i * 0.1}s`}}
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden relative rounded-2xl mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Floating price badge */}
                <div className="absolute top-4 right-4 bg-site-gold/90 backdrop-blur-md text-site-cherry px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                  ${item.price.toFixed(2)}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-site-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white/90 backdrop-blur-md text-site-primary px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-site-gold hover:text-site-cherry">
                    View Details
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <div className="mb-4">
                  <h3 className="text-xl lg:text-2xl font-serif font-bold text-site-primary group-hover:text-site-gold transition-colors duration-300 mb-2">
                    {item.name}
                  </h3>
                  <span className="inline-block bg-site-gold/20 text-site-primary text-xs px-3 py-1 rounded-full font-medium border border-site-gold/30">
                    {item.category}
                  </span>
                </div>

                <p className="text-site-text/70 text-sm lg:text-base mb-6 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item);
                  }}
                  className="w-full bg-site-gold hover:bg-site-gold/90 text-site-cherry font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-site-gold focus:ring-offset-2 group/btn"
                >
                  <span className="flex items-center justify-center gap-2">
                    Add to Cart
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="text-8xl mb-6">☕</div>
            <p className="text-site-text/60 text-2xl font-light">No items found in this category.</p>
          </div>
        )}
      </div>

      {/* Product Details Modal */}
      <ProductDetails
        item={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductDetails}
        onAddToCart={addToCart}
      />
    </div>
  );
};

export default Menu;
