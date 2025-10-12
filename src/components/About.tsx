import React from 'react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Head Barista',
      bio: 'With over 15 years in specialty coffee, Sarah founded our shop with a passion for creating exceptional coffee experiences. Her expertise in sourcing and roasting has been the cornerstone of our success.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      achievements: ['Certified Q-Grader', 'Roasting Champion 2019', '15+ Years Experience']
    },
    {
      name: 'Michael Chen',
      role: 'Master Roaster',
      bio: 'Michael brings precision and artistry to every batch he roasts. His background in chemical engineering combined with coffee passion results in consistently perfect roasts.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      achievements: ['PhD Food Science', 'Award-winning Roaster', 'Sustainability Expert']
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Community',
      bio: 'Emma ensures every customer feels like family. She leads our community events, workshops, and creates the warm, welcoming atmosphere that makes our shop special.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      achievements: ['Event Planning Expert', 'Community Builder', 'Customer Experience Specialist']
    }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We source only the finest beans from sustainable farms worldwide, ensuring every cup meets our exacting standards.',
      icon: '☕'
    },
    {
      title: 'Community Focus',
      description: 'Coffee brings people together. We\'re committed to creating a welcoming space where connections are made over great coffee.',
      icon: '🤝'
    },
    {
      title: 'Sustainability',
      description: 'From farm to cup, we prioritize environmentally responsible practices and support fair trade partnerships.',
      icon: '🌱'
    },
    {
      title: 'Innovation',
      description: 'We constantly explore new brewing methods, flavors, and experiences for our customers.',
      icon: '🔬'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-site-cream via-site-warm to-site-cream">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-site-cherry via-site-primary to-site-gold text-site-cream py-32 lg:py-48 overflow-hidden animate-fade-in">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-site-cream/30"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-site-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-site-cream/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

        <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10">
          <div className="animate-fade-in-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight tracking-tight">
              Our Story
            </h1>
            <div className="space-y-6 text-xl sm:text-2xl leading-relaxed max-w-2xl">
              <p className="font-light">Founded in 2020, our coffee shop began as a dream to create more than just another café.</p>
              <p className="font-light">We wanted to build a community around exceptional coffee, where every cup tells a story of passion, craftsmanship, and connection.</p>
              <p className="font-light">Today, we continue to push boundaries, source extraordinary beans from sustainable farms worldwide, and create memorable experiences that keep our community coming back.</p>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative w-full max-w-lg">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-site-gold/20 via-site-cream/10 to-transparent rounded-3xl blur-2xl animate-pulse-slow"></div>

              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=800&fit=crop"
                alt="Coffee shop interior"
                className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -bottom-4 -left-4 bg-site-gold text-site-cherry px-6 py-3 rounded-2xl font-semibold shadow-lg backdrop-blur-md">
                Est. 2020
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-site-primary mb-8">Our Mission</h2>
            <p className="text-2xl sm:text-3xl text-site-text/80 max-w-4xl mx-auto leading-relaxed font-light">
              To craft exceptional coffee experiences that bring people together, support sustainable farming communities, and inspire coffee lovers to discover the artistry behind every cup.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-left">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="Coffee beans and brewing equipment"
                className="rounded-3xl shadow-2xl w-full h-auto hover:shadow-xl transition-shadow duration-500"
              />
            </div>
            <div className="space-y-10 animate-fade-in-right">
              <div className="bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-500 border border-site-gold/20">
                <h3 className="text-3xl font-serif font-bold text-site-primary mb-6">Quality Without Compromise</h3>
                <p className="text-site-text/80 leading-relaxed text-lg">
                  We believe great coffee starts with great beans. That's why we work directly with farmers
                  who share our commitment to quality, sustainability, and fair practices. Every bean is
                  carefully selected, roasted to perfection, and brewed with precision.
                </p>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-500 border border-site-gold/20">
                <h3 className="text-3xl font-serif font-bold text-site-primary mb-6">Building Community</h3>
                <p className="text-site-text/80 leading-relaxed text-lg">
                  More than a coffee shop, we're a gathering place. Whether you're meeting friends,
                  working remotely, or simply need a moment of peace, our space is designed to welcome
                  and inspire connections that matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-site-warm/30 animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-site-primary mb-6">Our Values</h2>
          <p className="text-2xl sm:text-3xl text-site-text/80 max-w-3xl mx-auto leading-relaxed font-light">
            Every decision we make is guided by our core values that define who we are and how we serve our community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto">
          {values.map((value, i) => (
            <div key={i} className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-soft hover:shadow-medium transform hover:-translate-y-3 transition-all duration-500 text-center border border-site-gold/20 group animate-fade-in-up" style={{animationDelay: `${i * 0.1}s`}}>
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-site-primary mb-4">{value.title}</h3>
              <p className="text-site-text/80 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-site-primary mb-8">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 max-w-7xl mx-auto">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up" style={{animationDelay: `${i * 0.2}s`}}>
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-site-primary mb-2">{member.name}</h3>
                <p className="text-site-text/60 font-medium mb-4 text-lg">{member.role}</p>
                <p className="text-site-text/80 text-sm leading-relaxed mb-6">{member.bio}</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {member.achievements.map((ach, idx) => (
                    <span key={idx} className="bg-site-gold/20 text-site-primary px-4 py-2 rounded-full text-sm font-medium border border-site-gold/30 hover:bg-site-gold/30 transition-colors duration-300">
                      {ach}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-gradient-to-br from-site-cherry via-site-primary to-site-gold text-site-cream text-center relative overflow-hidden animate-fade-in">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-site-cream/20"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-site-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-site-cream/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

        <div className="relative max-w-4xl mx-auto px-6 z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-8">Experience the Difference</h2>
          <p className="text-2xl sm:text-3xl mb-12 text-site-cream/90 leading-relaxed font-light">
            Ready to taste the passion and craftsmanship that goes into every cup? Visit us today and become part of our coffee community.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-site-cream text-site-primary font-bold py-5 px-12 rounded-2xl shadow-2xl hover:shadow-site-cream/25 transform hover:-translate-y-2 transition-all duration-500 text-lg">
              <span className="flex items-center gap-3">
                Find Our Location
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
            </button>
            <button className="group border-2 border-site-cream/80 text-site-cream hover:bg-site-cream hover:text-site-primary font-bold py-5 px-12 rounded-2xl transition-all duration-500 text-lg backdrop-blur-sm hover:shadow-xl">
              <span className="flex items-center gap-3">
                View Our Menu
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
