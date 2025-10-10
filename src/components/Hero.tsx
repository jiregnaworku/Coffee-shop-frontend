import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-coffee-gradient text-white py-20 lg:py-32 transition-colors duration-300">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center max-w-7xl">
        {/* Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white">Discover the Perfect Brew</h1>
          <p className="text-lg lg:text-xl mb-8 text-orange-100 leading-relaxed">
            Freshly roasted coffee beans delivered straight to your cup. Taste
            the difference in every sip with our premium, sustainably sourced beans.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-coffee-accent hover:bg-coffee-cherry text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Order Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-coffee-primary font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
            alt="Coffee"
            className="rounded-xl shadow-2xl w-full max-w-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
