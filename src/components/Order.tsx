import React, { useState, useEffect } from 'react';
import { FaUser, FaCreditCard, FaTruck, FaCheckCircle } from 'react-icons/fa';

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  type: 'special' | 'normal';
}

const Order: React.FC = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    location: '',
    specialInstructions: ''
  });
  const [selectedPayment, setSelectedPayment] = useState('cash');
  const [deliveryType, setDeliveryType] = useState('pickup');
  const [showSuccess, setShowSuccess] = useState(false);

  // Get order items from localStorage or props
  useEffect(() => {
    const savedOrder = localStorage.getItem('currentOrder');
    if (savedOrder) {
      setOrderItems(JSON.parse(savedOrder));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateSubtotal = () => {
    return orderItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateDeliveryFee = () => {
    return deliveryType === 'delivery' ? 2.50 : 0;
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateDeliveryFee() + calculateTax();
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    // Create order object
    const orderData = {
      items: orderItems,
      customer: customerInfo,
      payment: selectedPayment,
      delivery: deliveryType,
      total: calculateTotal(),
      timestamp: new Date().toISOString()
    };

    // Here you would typically send to backend
    console.log('Order submitted:', orderData);

    // Clear the order from localStorage
    localStorage.removeItem('currentOrder');

    // Show success message
    setShowSuccess(true);

    // Redirect to home after 3 seconds
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  };

  const updateItemType = (itemId: number, type: 'special' | 'normal') => {
    setOrderItems(prev => prev.map(item =>
      item.id === itemId ? { ...item, type } : item
    ));
  };

  if (orderItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-site-cream via-site-warm/20 to-site-cream py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-site-primary mb-8">Your Order</h1>
          <p className="text-xl text-site-text/70 mb-8">No items in your order yet.</p>
          <a href="/" className="inline-flex items-center gap-3 bg-site-gold hover:bg-site-gold/90 text-site-cherry font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Menu
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-site-cream via-site-warm/20 to-site-cream">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-site-cherry via-site-primary to-site-gold text-site-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">Complete Your Order</h1>
          <p className="text-xl lg:text-2xl text-site-cream/90 font-light">Just a few more details to get your coffee on its way!</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Order Form */}
          <div className="space-y-8">
            <form onSubmit={handleSubmitOrder} className="space-y-8">

              {/* Customer Information */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-soft p-8 border border-site-gold/20">
                <h2 className="text-3xl font-serif font-bold text-site-primary mb-6 flex items-center gap-3">
                  <FaUser className="text-site-gold" />
                  Customer Details
                </h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-site-primary mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border border-site-gold/30 rounded-2xl bg-white/80 backdrop-blur-sm text-site-text placeholder-site-text/50 focus:ring-2 focus:ring-site-gold focus:border-transparent transition-all duration-300 text-lg"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-lg font-medium text-site-primary mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border border-site-gold/30 rounded-2xl bg-white/80 backdrop-blur-sm text-site-text placeholder-site-text/50 focus:ring-2 focus:ring-site-gold focus:border-transparent transition-all duration-300 text-lg"
                      placeholder="+251 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-lg font-medium text-site-primary mb-3">
                      Delivery Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={customerInfo.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 border border-site-gold/30 rounded-2xl bg-white/80 backdrop-blur-sm text-site-text placeholder-site-text/50 focus:ring-2 focus:ring-site-gold focus:border-transparent transition-all duration-300 text-lg"
                      placeholder="Street address, area, city"
                    />
                  </div>

                  <div>
                    <label htmlFor="specialInstructions" className="block text-lg font-medium text-site-primary mb-3">
                      Special Instructions (Optional)
                    </label>
                    <textarea
                      id="specialInstructions"
                      name="specialInstructions"
                      value={customerInfo.specialInstructions}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-6 py-4 border border-site-gold/30 rounded-2xl bg-white/80 backdrop-blur-sm text-site-text placeholder-site-text/50 focus:ring-2 focus:ring-site-gold focus:border-transparent transition-all duration-300 resize-none text-lg"
                      placeholder="Any special requests or delivery notes..."
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Options */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-soft p-8 border border-site-gold/20">
                <h2 className="text-3xl font-serif font-bold text-site-primary mb-6 flex items-center gap-3">
                  <FaTruck className="text-site-gold" />
                  Delivery Options
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      id="pickup"
                      name="deliveryType"
                      value="pickup"
                      checked={deliveryType === 'pickup'}
                      onChange={(e) => setDeliveryType(e.target.value)}
                      className="w-5 h-5 text-site-gold focus:ring-site-gold"
                    />
                    <label htmlFor="pickup" className="text-lg text-site-text cursor-pointer">
                      Pickup from Store (Free)
                    </label>
                  </div>

                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      id="delivery"
                      name="deliveryType"
                      value="delivery"
                      checked={deliveryType === 'delivery'}
                      onChange={(e) => setDeliveryType(e.target.value)}
                      className="w-5 h-5 text-site-gold focus:ring-site-gold"
                    />
                    <label htmlFor="delivery" className="text-lg text-site-text cursor-pointer">
                      Home Delivery (+$2.50)
                    </label>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-soft p-8 border border-site-gold/20">
                <h2 className="text-3xl font-serif font-bold text-site-primary mb-6 flex items-center gap-3">
                  <FaCreditCard className="text-site-gold" />
                  Payment Method
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      id="cash"
                      name="payment"
                      value="cash"
                      checked={selectedPayment === 'cash'}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="w-5 h-5 text-site-gold focus:ring-site-gold"
                    />
                    <label htmlFor="cash" className="text-lg text-site-text cursor-pointer">
                      Cash on Delivery/Pickup
                    </label>
                  </div>

                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      id="card"
                      name="payment"
                      value="card"
                      checked={selectedPayment === 'card'}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="w-5 h-5 text-site-gold focus:ring-site-gold"
                    />
                    <label htmlFor="card" className="text-lg text-site-text cursor-pointer">
                      Card Payment (Coming Soon)
                    </label>
                  </div>

                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      id="cbe"
                      name="payment"
                      value="cbe"
                      checked={selectedPayment === 'cbe'}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="w-5 h-5 text-site-gold focus:ring-site-gold"
                    />
                    <label htmlFor="cbe" className="text-lg text-site-text cursor-pointer">
                      CBE Mobile Banking (Coming Soon)
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-site-gold hover:bg-site-gold/90 text-site-cherry font-bold py-6 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-xl"
              >
                Place Order - ${calculateTotal().toFixed(2)}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-soft p-8 border border-site-gold/20">
              <h2 className="text-3xl font-serif font-bold text-site-primary mb-6">Order Summary</h2>

              <div className="space-y-6">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-4 border-b border-site-gold/20 last:border-b-0">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-site-primary">{item.name}</h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm text-site-text/70">Quantity: {item.quantity}</span>
                        <select
                          value={item.type}
                          onChange={(e) => updateItemType(item.id, e.target.value as 'special' | 'normal')}
                          className="text-sm border border-site-gold/30 rounded-lg px-2 py-1 bg-white/80 focus:ring-2 focus:ring-site-gold"
                        >
                          <option value="normal">Normal</option>
                          <option value="special">Special (+$1)</option>
                        </select>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-site-primary">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}

                <div className="border-t border-site-gold/20 pt-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-site-text">Subtotal:</span>
                    <span className="font-semibold">${calculateSubtotal().toFixed(2)}</span>
                  </div>

                  {deliveryType === 'delivery' && (
                    <div className="flex justify-between">
                      <span className="text-site-text">Delivery Fee:</span>
                      <span className="font-semibold">${calculateDeliveryFee().toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-site-text">Tax (8%):</span>
                    <span className="font-semibold">${calculateTax().toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-xl font-bold text-site-primary border-t border-site-gold/20 pt-4">
                    <span>Total:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-12 max-w-md w-full text-center transform animate-scale-in border border-site-gold/20">
            <div className="mb-6">
              <div className="w-20 h-20 bg-site-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="w-10 h-10 text-site-gold" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-site-primary mb-4">Order Placed Successfully!</h2>
              <p className="text-lg text-site-text/80 mb-6">
                Thank you for choosing Jiro Coffee! Your delicious coffee will be prepared shortly.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-site-cream/50 rounded-2xl p-4">
                <p className="text-site-text/70 text-sm">
                  {deliveryType === 'pickup' ? 'Pickup' : 'Delivery'} Order #{Date.now().toString().slice(-6)}
                </p>
                <p className="text-site-primary font-semibold">
                  Total: ${calculateTotal().toFixed(2)}
                </p>
              </div>

              <div className="text-sm text-site-text/60">
                <p>You will be redirected to the home page shortly...</p>
                <div className="mt-2 flex justify-center">
                  <div className="flex space-x-1">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className={`w-2 h-2 rounded-full ${
                          dot <= 3 ? 'bg-site-gold animate-pulse' : 'bg-site-text/30'
                        }`}
                        style={{ animationDelay: `${dot * 0.5}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
