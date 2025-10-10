import { useState } from 'react';
import type { MenuItem } from '../data/menuData';

interface ProductDetailsProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

const ProductDetails = ({ item, isOpen, onClose, onAddToCart }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !item) return null;

  const handleAddToCart = () => {
    onAddToCart(item, quantity);
    setQuantity(1); // Reset quantity after adding to cart
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="px-6 pb-6">
          {/* Product Image and Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Large Image */}
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full mb-2">
                  {item.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{item.name}</h1>
                <p className="text-2xl font-bold text-yellow-600 mb-4">${item.price.toFixed(2)}</p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>

              {/* Quantity Selector and Add to Cart */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total Price */}
                <div className="text-lg font-semibold text-gray-900">
                  Total: ${(item.price * quantity).toFixed(2)}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg"
                >
                  Add {quantity} to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
