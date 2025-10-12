import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Emily R.",
    comment: "Best coffee I've ever had! The aroma and flavor are unmatched.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "James T.",
    comment: "Fast delivery and delicious beans. Highly recommend!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Sophia L.",
    comment: "A premium coffee experience in every sip. Love it!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-site-cream via-site-warm/20 to-site-cream relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-site-gold/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-site-cream/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-site-primary mb-6">
            What Our Customers Say
          </h2>
          <p className="text-2xl text-site-text/80 leading-relaxed max-w-3xl mx-auto font-light">
            Real stories from coffee lovers who have experienced our passion for perfection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className="bg-white/90 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-500 text-center hover:-translate-y-3 border border-site-gold/20 group animate-fade-in-up"
              style={{animationDelay: `${i * 0.2}s`}}
            >
              {/* Quote decoration */}
              <div className="text-6xl text-site-gold/30 mb-4 font-serif">"</div>

              {/* Profile image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover shadow-lg border-4 border-site-gold/20 group-hover:border-site-gold/40 transition-colors duration-300"
                  />
                </div>
                {/* Floating stars */}
                <div className="absolute -top-2 -right-2 flex space-x-1">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} className="w-4 h-4 text-site-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="text-site-text/80 text-lg leading-relaxed mb-6 font-light italic">
                "{testimonial.comment}"
              </blockquote>

              <div className="border-t border-site-gold/20 pt-4">
                <h4 className="font-serif font-bold text-xl text-site-primary">{testimonial.name}</h4>
                <p className="text-site-text/60 text-sm mt-1">Verified Customer</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-site-text/70 text-xl mb-8 font-light">
            Join thousands of satisfied coffee lovers
          </p>
          <button className="bg-site-gold hover:bg-site-gold/90 text-site-cherry font-bold py-4 px-10 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
            Leave a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
