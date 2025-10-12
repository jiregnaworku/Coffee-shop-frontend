import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Espresso",
    price: 3,
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400",
  },
  {
    id: 2,
    name: "Latte",
    price: 4,
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400",
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 4,
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
  },
  {
    id: 4,
    name: "Mocha",
    price: 5,
    img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400",
  },
];

interface FeaturedProductsProps {
  onOrderNow?: (product: typeof products[0]) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onOrderNow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-32 bg-gradient-to-b from-site-warm/30 via-site-cream to-site-warm/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-site-gold/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-site-cream/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-site-primary mb-6">
            Featured Products
          </h2>
          <p className="text-2xl text-site-text/80 leading-relaxed max-w-3xl mx-auto font-light">
            Discover our signature blends and artisanal creations, crafted with passion and precision.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative animate-fade-in-up">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, i) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-6 py-8"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-soft hover:shadow-medium transition-all duration-500 text-center hover:-translate-y-3 border border-site-gold/20 group animate-fade-in-up" style={{animationDelay: `${i * 0.1}s`}}>
                    <div className="aspect-square overflow-hidden relative rounded-2xl mb-6 mx-auto max-w-sm">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Floating price badge */}
                      <div className="absolute top-4 right-4 bg-site-gold/90 backdrop-blur-md text-site-cherry px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                        ${product.price}
                      </div>
                    </div>
                    <div className="px-6">
                      <h3 className="font-serif font-bold text-2xl mb-3 text-site-primary group-hover:text-site-gold transition-colors duration-300">{product.name}</h3>
                      <button
                        onClick={() => onOrderNow && onOrderNow(product)}
                        className="bg-site-gold hover:bg-site-gold/90 text-site-cherry font-semibold py-3 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-md text-site-primary p-4 rounded-full hover:bg-site-gold hover:text-site-cherry transition-all duration-300 shadow-lg hover:scale-110 border border-site-gold/20 group"
          >
            <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-md text-site-primary p-4 rounded-full hover:bg-site-gold hover:text-site-cherry transition-all duration-300 shadow-lg hover:scale-110 border border-site-gold/20 group"
          >
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-site-gold scale-125'
                    : 'bg-site-text/30 hover:bg-site-gold/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
