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
    <div className="min-h-screen bg-coffee-warm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-coffee-primary mb-4 transition-colors duration-300">Our Menu</h1>
          <p className="text-lg lg:text-xl text-coffee-text max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Discover our carefully crafted selection of premium coffee drinks, fresh pastries, and delicious bites.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-coffee-accent text-white shadow-lg scale-105'
                  : 'bg-coffee-light text-coffee-text border border-coffee-300 hover:bg-coffee-200 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-coffee-light p-4 lg:p-6 rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group"
              onClick={() => openProductDetails(item)}
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-4 lg:p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg lg:text-xl font-semibold text-coffee-primary group-hover:text-coffee-accent transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-lg lg:text-xl font-bold text-coffee-accent">
                    ${item.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-coffee-text text-sm lg:text-base mb-4 line-clamp-2 leading-relaxed transition-colors duration-300">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-block bg-coffee-200 text-coffee-primary text-xs px-3 py-1 rounded-full transition-colors duration-300">
                    {item.category}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item);
                    }}
                    className="bg-coffee-accent hover:bg-coffee-cherry text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-medium text-sm lg:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-coffee-primary focus:ring-offset-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">☕</div>
            <p className="text-gray-500 dark:text-gray-400 text-xl transition-colors duration-300">No items found in this category.</p>
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
