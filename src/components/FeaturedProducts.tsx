import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Espresso",
    price: 3,
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600",
  },
  {
    id: 2,
    name: "Latte",
    price: 4,
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600",
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 4,
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600",
  },
  {
    id: 4,
    name: "Mocha",
    price: 5,
    img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=600",
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
    <section className="py-20 bg-gradient-to-b from-amber-50 via-amber-100/40 to-amber-50 relative overflow-hidden">
      <div className="absolute top-16 left-10 w-40 h-40 bg-yellow-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 right-10 w-56 h-56 bg-yellow-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-900 mb-3">
            Featured Coffees
          </h2>
          <p className="text-sm sm:text-base text-amber-700/80 max-w-2xl mx-auto font-light">
            Handcrafted with Ethiopian heritage and roasted to perfection.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
                >
                  <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group border border-amber-100 hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative w-full h-64 overflow-hidden">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full font-semibold text-xs shadow-md">
                        ${product.price}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-5 text-center">
                      <h3 className="font-serif text-xl text-amber-900 font-bold mb-2 group-hover:text-amber-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-amber-800/70 text-sm mb-4">
                        Smooth, bold, and rich — a taste of Ethiopia in every sip.
                      </p>
                      <button
                        onClick={() => onOrderNow && onOrderNow(product)}
                        className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-full text-sm transition-all duration-300 hover:scale-105"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 text-amber-900 p-2.5 rounded-full hover:bg-amber-500 hover:text-white transition-all shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 text-amber-900 p-2.5 rounded-full hover:bg-amber-500 hover:text-white transition-all shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-amber-500 scale-110"
                    : "bg-amber-300 hover:bg-amber-400"
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
