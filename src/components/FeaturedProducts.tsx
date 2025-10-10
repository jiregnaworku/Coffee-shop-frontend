import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Espresso",
    price: "$3",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400",
  },
  {
    id: 2,
    name: "Latte",
    price: "$4",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400",
  },
  {
    id: 3,
    name: "Cappuccino",
    price: "$4",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400",
  },
  {
    id: 4,
    name: "Mocha",
    price: "$5",
    img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400",
  },
];

const FeaturedProducts: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-coffee-gradient">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-white">
          Featured Products
        </h2>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 py-6"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center hover:-translate-y-2">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white transition-colors duration-300">{product.name}</h3>
                      <p className="text-coffee-600 dark:text-coffee-400 font-bold text-lg transition-colors duration-300">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 text-white p-3 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:scale-110"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 text-white p-3 rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:scale-110"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
