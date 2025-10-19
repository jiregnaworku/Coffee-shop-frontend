import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { type MenuItem } from "./data/menuData";

function App() {
  const [cart, setCart] = useState<(MenuItem & { quantity: number })[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

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

  // Listen for hash changes to show/hide cart
  useEffect(() => {
    const handleHashChange = () => {
      setShowCart(window.location.hash === '#cart');
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Navigate to cart page
  const goToCart = () => {
    window.location.hash = 'cart';
  };

  // Navigate to sections with smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  // Navigate to home (top of page)
  const goToHome = () => {
    setShowCart(false); // Hide cart first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }, 100);
  };

  // Navigate to menu section
  const goToMenu = () => {
    setShowCart(false); // Hide cart first
    setTimeout(() => {
      scrollToSection('menu-section');
    }, 100);
  };

  // Navigate to about section
  const goToAbout = () => {
    setShowCart(false); // Hide cart first
    setTimeout(() => {
      scrollToSection('about-section');
    }, 100);
  };

  // Navigate to contact section
  const goToContact = () => {
    setShowCart(false); // Hide cart first
    setTimeout(() => {
      scrollToSection('contact-section');
    }, 100);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle mobile menu cart navigation
  const handleMobileCartClick = () => {
    setIsMobileMenuOpen(false);
    if (!showCart) {
      goToCart();
    }
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
                  className="px-4 py-2 rounded-xl font-medium transition-all duration-300 text-lg text-site-text hover:text-site-primary hover:bg-site-cream/30"
                >
                  Home
                </button>
                <button
                  onClick={goToMenu}
                  className="px-4 py-2 rounded-xl font-medium transition-all duration-300 text-lg text-site-text hover:text-site-primary hover:bg-site-cream/30"
                >
                  Menu
                </button>
                <button
                  onClick={goToAbout}
                  className="px-4 py-2 rounded-xl font-medium transition-all duration-300 text-lg text-site-text hover:text-site-primary hover:bg-site-cream/30"
                >
                  About
                </button>
                <button
                  onClick={goToContact}
                  className="px-4 py-2 rounded-xl font-medium transition-all duration-300 text-lg text-site-text hover:text-site-primary hover:bg-site-cream/30"
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
                  onClick={goToHome}
                  className="w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 text-lg text-site-text hover:text-site-primary hover:bg-site-cream/30"
                >
                  Home
                </button>
                <button
                  onClick={goToMenu}
                  className="w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 text-lg text-site-text hover:text-site-primary hover:bg-site-cream/30"
                >
                  Menu
                </button>
                <button
                  onClick={goToAbout}
                  className="w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 text-lg text-site-text hover:text-site-primary hover:bg-site-cream/30"
                >
                  About
                </button>
                <button
                  onClick={goToContact}
                  className="w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 text-lg text-site-text hover:text-site-primary hover:bg-site-cream/30"
                >
                  Contact
                </button>
              </div>

              <div className="pt-6 border-t border-site-gold/20">
                <button
                  onClick={handleMobileCartClick}
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

      {/* Main content or Cart - Conditional Rendering */}
      {showCart ? (
        <Cart
          cart={cart}
          updateQuantity={(itemId: number, quantity: number) => {
            if (quantity <= 0) {
              setCart(prevCart => prevCart.filter(item => item.id !== itemId));
            } else {
              setCart(prevCart =>
                prevCart.map(item =>
                  item.id === itemId ? { ...item, quantity } : item
                )
              );
            }
          }}
          removeItem={(itemId: number) => {
            setCart(prevCart => prevCart.filter(item => item.id !== itemId));
          }}
          clearCart={() => setCart([])}
          onCheckout={() => {
            // Handle checkout - for now just clear cart and go home
            setCart([]);
            window.location.hash = '';
          }}
        />
      ) : (
        <>
          {/* Main content - Single Page Layout */}
          <Hero />
          <div id="menu-section">
            <Menu addToCart={addToCart} />
          </div>
          <FeaturedProducts onOrderNow={handleOrderNow} />
          <div id="about-section">
            <About goToContact={goToContact} goToMenu={goToMenu} />
          </div>
          <Testimonials />
          <div id="contact-section">
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
