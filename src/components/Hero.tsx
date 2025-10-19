import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-site-cherry via-site-primary to-site-gold text-site-cream py-0 lg:py-0 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-site-gold/30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-site-gold/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-site-cream/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center max-w-7xl z-10">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight tracking-tight text-shadow-lg">
            Artisan Coffee
            <span className="block text-site-gold">Perfected</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-8 text-site-cream/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
            Discover the world's finest beans, expertly roasted and crafted into
            exceptional beverages that awaken your senses.
          </p>

          {/* Premium Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
            <button
              onClick={() => {
                const menuSection = document.getElementById('menu-section');
                menuSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="group bg-site-gold hover:bg-site-gold/90 text-site-cherry font-semibold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-site-gold/25 transform hover:-translate-y-2 transition-all duration-500 text-base"
            >
              <span className="flex items-center gap-3">
                Explore Menu
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button
              onClick={() => {
                const aboutSection = document.getElementById('about-section');
                aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="group border-2 border-site-cream/80 text-site-cream hover:bg-site-cream hover:text-site-cherry font-semibold py-4 px-8 rounded-2xl transition-all duration-500 text-base backdrop-blur-sm hover:shadow-xl"
            >
              <span className="flex items-center gap-3">
                Our Story
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mb-12 lg:mb-0 flex justify-center animate-fade-in-right">
          <div className="relative w-full max-w-2xl">
            {/* Decorative elements */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-site-gold/20 via-site-cream/10 to-transparent rounded-3xl blur-2xl animate-pulse-slow"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-site-gold/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-site-cream/20 rounded-full animate-float" style={{animationDelay: '3s'}}></div>

            {/* Main coffee image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl backdrop-blur-sm bg-white/10">
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80"
                alt="Premium artisan coffee"
                className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              {/* Floating badge */}
              <div className="absolute top-6 left-6 bg-site-gold/90 backdrop-blur-md text-site-cherry px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-fade-in">
                Premium Blend
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-site-cream/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
