import React from 'react';
import { type MenuItem } from '../data/menuData';

interface CartProps {
  cart: (MenuItem & { quantity: number })[];
  updateQuantity: (itemId: number, quantity: number) => void;
  removeItem: (itemId: number) => void;
  clearCart: () => void;
}

const Cart: React.FC<CartProps> = ({ cart, updateQuantity, removeItem, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Your Cart</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg transition-colors duration-300">Your cart is empty</p>
            <button
              onClick={() => window.history.back()}
              className="mt-6 bg-coffee-600 dark:bg-coffee-500 hover:bg-coffee-700 dark:hover:bg-coffee-400 text-white dark:text-gray-900 px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Your Cart</h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{cart.length} item{cart.length !== 1 ? 's' : ''} in your cart</p>
        </div>

        {/* Cart Items */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-300">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0 transition-colors duration-300">
              {/* Item Info */}
              <div className="flex items-center space-x-4 flex-1">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">${item.price.toFixed(2)} each</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300 font-medium transition-all duration-300"
                >
                  −
                </button>
                <span className="w-12 text-center font-medium text-gray-900 dark:text-white transition-colors duration-300">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300 font-medium transition-all duration-300"
                >
                  +
                </button>
              </div>

              {/* Item Total */}
              <div className="text-right min-w-[80px]">
                <p className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="ml-4 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 p-2 transition-colors duration-300"
                title="Remove item"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-300">Total:</span>
            <span className="text-2xl font-bold text-coffee-600 dark:text-coffee-400 transition-colors duration-300">${total.toFixed(2)}</span>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={clearCart}
              className="flex-1 bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              Clear Cart
            </button>
            <button
              onClick={() => alert('Checkout functionality would be implemented here!')}
              className="flex-1 bg-coffee-600 dark:bg-coffee-500 hover:bg-coffee-700 dark:hover:bg-coffee-400 text-white dark:text-gray-900 px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              Checkout
            </button>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-6">
          <button
            onClick={() => window.history.back()}
            className="text-coffee-600 dark:text-coffee-400 hover:text-coffee-700 dark:hover:text-coffee-300 font-medium transition-colors duration-300"
          >
            ← Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
