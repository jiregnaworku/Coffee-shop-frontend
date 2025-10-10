import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import { type MenuItem } from "./data/menuData";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState<(MenuItem & { quantity: number })[]>([]);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact' | 'cart'>('home');

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

  return (
    <ThemeProvider>
      <div className="font-sans text-gray-900 dark:text-white min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Navigation */}
        <nav className="bg-coffee-warm shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-coffee-primary">Coffee Shop</h1>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <button
                    onClick={goToHome}
                    className={`px-3 py-2 rounded-md font-medium transition-all duration-300 ${
                      currentPage === 'home'
                        ? 'text-coffee-primary bg-coffee-light'
                        : 'text-coffee-text hover:text-coffee-primary hover:bg-coffee-100'
                    }`}
                  >
                    Menu
                  </button>
                  <button
                    onClick={goToAbout}
                    className={`px-3 py-2 rounded-md font-medium transition-all duration-300 ${
                      currentPage === 'about'
                        ? 'text-coffee-primary bg-coffee-light'
                        : 'text-coffee-text hover:text-coffee-primary hover:bg-coffee-100'
                    }`}
                  >
                    About
                  </button>
                  <button
                    onClick={goToContact}
                    className={`px-3 py-2 rounded-md font-medium transition-all duration-300 ${
                      currentPage === 'contact'
                        ? 'text-coffee-primary bg-coffee-light'
                        : 'text-coffee-text hover:text-coffee-primary hover:bg-coffee-100'
                    }`}
                  >
                    Contact
                  </button>
                </div>
              </div>

              {/* Right side - Theme toggle and Cart */}
              <div className="flex items-center space-x-4">
                <ThemeToggle />

                {/* Cart Button */}
                <button
                  onClick={goToCart}
                  className="relative p-2 text-coffee-text hover:text-coffee-primary transition-colors duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-coffee-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                      {cart.length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Menu addToCart={addToCart} />
            <FeaturedProducts />
            <About />
            <Testimonials />
            <Footer goToHome={goToHome} goToAbout={goToAbout} goToContact={goToContact} />
          </>
        ) : currentPage === 'about' ? (
          <About />
        ) : currentPage === 'contact' ? (
          <Contact />
        ) : (
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            clearCart={clearCart}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
