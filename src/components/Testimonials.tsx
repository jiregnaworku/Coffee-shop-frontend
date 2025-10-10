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
    <section className="py-20 bg-coffee-gradient">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-white">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-coffee-light p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center hover:-translate-y-2"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 ring-4 ring-coffee-200 transition-colors duration-300"
              />
              <p className="text-coffee-text mb-4 italic leading-relaxed transition-colors duration-300">"{t.comment}"</p>
              <h4 className="font-bold text-coffee-primary transition-colors duration-300">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
