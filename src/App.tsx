import { useState } from "react";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Order from "./components/Order";
import { type MenuItem } from "./data/menuData";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState<(MenuItem & { quantity: number })[]>([]);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact' | 'cart' | 'order'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add item to cart with quantity
  const addToCart = (item: MenuItem, quantity: number = 1) => {
    setCart(prevCart => {
      // Check if item already exists in cart
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        // Update quantity of existing item
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + quantity }
            : cartItem
        );
      } else {
        // Add new item to cart
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  // Update item quantity
  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(cartItem =>
        cartItem.id === itemId
          ? { ...cartItem, quantity }
          : cartItem
      )
    );
  };

  // Remove item from cart
  const removeItem = (itemId: number) => {
    setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== itemId));
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Navigate to contact page
  const goToContact = () => {
    setCurrentPage('contact');
  };

  // Navigate to cart page
  const goToCart = () => {
    setCurrentPage('cart');
  };

  // Navigate to about page
  const goToAbout = () => {
    setCurrentPage('about');
  };

  // Navigate back to home
  const goToHome = () => {
    setCurrentPage('home');
  };

  // Handle checkout from cart
  const handleCheckout = () => {
    if (cart.length > 0) {
      // Store the cart items for the order page
      localStorage.setItem('currentOrder', JSON.stringify(
        cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          type: 'normal' as 'special' | 'normal'
        }))
      ));
      setCurrentPage('order');
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when navigating
  const navigateAndCloseMobileMenu = (page: 'home' | 'about' | 'contact' | 'cart' | 'order') => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  function handleOrderNow(_product: { id: number; name: string; price: number; img: string; }): void {
    throw new Error("Function not implemented.");
  }

  return (
  
      <div className="font-sans text-site-text min-h-screen bg-site-cream transition-colors duration-300">
        {/* Navigation */}
        <nav className="bg-site-warm/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-site-gold/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-serif font-bold text-site-primary hover:text-site-gold transition-colors duration-300">
                  Jiro Coffee
                </h1>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <button
                    onClick={goToHome}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 text-lg ${
                      currentPage === 'home'
                        ? 'text-site-primary bg-site-cream/50 shadow-md'
                        : 'text-site-text hover:text-site-primary hover:bg-site-cream/30'
                    }`}
                  >
                    Home
                  </button>
                  <button
                    onClick={goToAbout}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 text-lg ${
                      currentPage === 'about'
                        ? 'text-site-primary bg-site-cream/50 shadow-md'
                        : 'text-site-text hover:text-site-primary hover:bg-site-cream/30'
                    }`}
                  >
                    About
                  </button>
                  <button
                    onClick={goToContact}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 text-lg ${
                      currentPage === 'contact'
                        ? 'text-site-primary bg-site-cream/50 shadow-md'
                        : 'text-site-text hover:text-site-primary hover:bg-site-cream/30'
                    }`}
                  >
                    Contact
                  </button>
                </div>
              </div>

              {/* Right side - Theme toggle and Cart */}
              <div className="flex items-center space-x-6">
                {/* Cart Button */}
                <button
                  onClick={goToCart}
                  className="relative p-3 text-site-text hover:text-site-primary transition-all duration-300 rounded-xl hover:bg-site-cream/30 group"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-site-gold text-site-cherry text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-scale-in">
                      {cart.length}
                    </span>
                  )}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center space-x-4">
                {/* Hamburger Menu Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="p-3 text-site-text hover:text-site-primary transition-all duration-300 rounded-xl hover:bg-site-cream/30 group"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMobileMenu}>
            <div className="fixed bottom-0 left-0 right-0 bg-site-warm/95 backdrop-blur-md shadow-lg border-t border-site-gold/20 z-50 transform transition-transform duration-300 ease-in-out">
              <div className="px-6 py-8 space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-serif font-bold text-site-primary">Jiro Coffee</h2>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => navigateAndCloseMobileMenu('home')}
                    className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 text-lg ${
                      currentPage === 'home'
                        ? 'text-site-primary bg-site-cream/50 shadow-md'
                        : 'text-site-text hover:text-site-primary hover:bg-site-cream/30'
                    }`}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => navigateAndCloseMobileMenu('about')}
                    className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 text-lg ${
                      currentPage === 'about'
                        ? 'text-site-primary bg-site-cream/50 shadow-md'
                        : 'text-site-text hover:text-site-primary hover:bg-site-cream/30'
                    }`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => navigateAndCloseMobileMenu('contact')}
                    className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 text-lg ${
                      currentPage === 'contact'
                        ? 'text-site-primary bg-site-cream/50 shadow-md'
                        : 'text-site-text hover:text-site-primary hover:bg-site-cream/30'
                    }`}
                  >
                    Contact
                  </button>
                </div>

                <div className="pt-6 border-t border-site-gold/20">
                  <button
                    onClick={() => navigateAndCloseMobileMenu('cart')}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-site-gold hover:bg-site-gold/90 text-site-cherry font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    View Cart {cart.length > 0 && `(${cart.length})`}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        {currentPage === 'home' ? (
          <>
            <Hero />
            <div id="menu-section">
              <Menu addToCart={addToCart} />
            </div>
            <FeaturedProducts onOrderNow={handleOrderNow} />
            <div id="about-section">
              <About />
            </div>
            <Testimonials />
            <Footer goToHome={goToHome} goToAbout={goToAbout} goToContact={goToContact} />
          </>
        ) : currentPage === 'about' ? (
          <About />
        ) : currentPage === 'contact' ? (
          <Contact />
        ) : currentPage === 'order' ? (
          <Order />
        ) : (
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            clearCart={clearCart}
            onCheckout={handleCheckout}
          />
        )}
      </div>
 
  );
}

export default App;
